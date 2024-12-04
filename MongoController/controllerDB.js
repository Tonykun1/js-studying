const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'mongostudy';

async function connectToMongo() {
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        const collection = db.collection('products');
        const orders = await collection.find({}).toArray();
        console.log(orders);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    } finally {
        await client.close();
    }
}

async function connectToMongo2(req, res) {
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db(dbName);
        const collection = db.collection('products');

        const newOrder = req.body;

        const result = await collection.insertOne(newOrder);

        res.status(201).json({ message: 'Inserted document', insertedId: result.insertedId });
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        res.status(500).json({ message: 'Error inserting document', error: err });
    } finally {
        await client.close();
    }
}
module.exports = {
    connectToMongo,
    connectToMongo2
};
