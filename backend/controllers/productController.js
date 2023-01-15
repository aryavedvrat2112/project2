const Product = require("../models/produceModel");
const Features = require("../utils/features");

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};
exports.getAllProducts = async (req, res, next) => {
  const feature = new Features(Product.find(), req.query)
  .search()
  const products = await feature.productsQuery;
  res.status(200).json({
    success: true,
    products,
  });
};
