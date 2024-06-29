const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: String,
  product_type: String,
  cost: Number,
  rating: String,
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
