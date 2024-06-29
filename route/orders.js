const express = require("express");
const router = express.Router();
const { createOrder } = require("../controller/orderControllers");

router.route("/orders").post(createOrder);

module.exports = router;
