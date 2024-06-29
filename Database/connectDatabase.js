const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database connection created");
  } catch (error) {
    console.log(`Database is not connected due to this ${error.message}`);
  }
};

module.exports = connectDatabase;
