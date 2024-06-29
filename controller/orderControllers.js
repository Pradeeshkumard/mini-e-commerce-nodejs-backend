const OrderModel = require("../model/orderModel");

exports.createOrder = async (req, res, next) => {
  const cartItems = req.body;
  const totalAmount = Number(
    cartItems.reduce((acc, item) => acc + item.product.cost * item.quantity, 0)
  ).toFixed(2);
  const status = "pending";

  const order = await OrderModel.create({ cartItems, totalAmount, status });
  res.status(201).json({
    success: true,
    order,
  });
};
