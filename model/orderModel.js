const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  cartItems: Array,
  totalAmount: Number,
  status: String,
  order_created_at: Date,
});

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;
