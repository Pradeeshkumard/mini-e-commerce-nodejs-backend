const express = require("express");
const app = express();
require("dotenv").config();
const products = require("./route/products");
const orders = require("./route/orders");
const connectDatabase = require("./Database/connectDatabase");
connectDatabase();

app.use(express.json());
app.use("/api/v1/", products);
app.use("/api/v1/", orders);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at ${process.env.PORT}`);
});
