const express = require('express');
const mongoose = require('mongoose');
const Product = require("./models/Product");

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/product", { useNewUrlParser: true });

const app = express();

app.use(express.json());

app.get('/products', async(req, res, next) => {

	  const products = await Product.find()
	  res.setHeader('Content-Type', 'application/json');
	  res.json(products);

});


app.listen(3000, () => console.log('Listening on port 3000!'));
