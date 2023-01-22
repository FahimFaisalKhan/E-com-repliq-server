const Product = require("../../models/products");

exports.getProducts = async (req, res) => {
  const response = await Product.find({}).exec();

  res.send(response);
};

exports.getProduct = async (req, res) => {
  const id = req.query.id;
  const response = await Product.findOne({ _id: id }).exec();

  res.send(response);
};

exports.getCatagories = async (req, res) => {
  const response = await Product.find().distinct("category");

  res.send(response);
};
