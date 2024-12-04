const express = require('express')
const app = express()
const port = 3000
const {connectToMongo,connectToMongo2}=require("./MongoController/controllerDB")
const {fetchProducts,addProduct,connectToMongoDB}=require("./MongoController/controllermongoose")
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
  connectToMongo
})

app.get('/user', (req, res) => {
    connectToMongo()
  })
  app.post('/user', connectToMongo2
)
connectToMongoDB();
app.get('/products', fetchProducts);
app.post('/products', addProduct);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})