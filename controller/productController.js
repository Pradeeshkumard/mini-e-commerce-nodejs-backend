const ProductModel = require("../model/productModel");

exports.getProducts = async (req, res, next) => {
  try {
    const data = await ProductModel.find({});
    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(404).json({ message: "No Data Found" });
  }
};

exports.getSingleProduct = async (req, res, next) => {
  try {
    const data = await ProductModel.findById(req.params.id);
    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(404).json({ message: "No Data Found" });
  }
};
