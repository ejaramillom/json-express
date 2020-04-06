const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: String }
});

module.exports = mongoose.model("Product", ProductSchema);
