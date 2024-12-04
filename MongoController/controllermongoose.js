const mongoose = require('mongoose');

// MongoDB connection string
const url = 'mongodb://localhost:27017/mongostudy';

// Connect to MongoDB using Mongoose
async function connectToMongoDB() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB with Mongoose');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

// Define a Schema for the `products` collection
const productSchema = new mongoose.Schema({
    customer: { type: String, required: true },
    total: { type: Number, required: true },
    items: { type: [String], default: [] } // Optional array of items
});

// Create a Mongoose Model
const Product = mongoose.model('Product', productSchema);

// Fetch all products (connectToMongo equivalent)
async function fetchProducts(req, res) {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ message: 'Error fetching products', error: err });
    }
}

// Add a new product (connectToMongo2 equivalent)
async function addProduct(req, res) {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json({ message: 'Inserted document', insertedId: savedProduct._id });
    } catch (err) {
        console.error('Error inserting product:', err);
        res.status(500).json({ message: 'Error inserting document', error: err });
    }
}

module.exports = {
    connectToMongoDB,
    fetchProducts,
    addProduct
};
