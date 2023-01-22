const Product = require("../../models/products");

exports.addProduct = async (req, res) => {
  const { data } = req.body;

  const response = await Product.create(data);

  res.send({ success: true });
};
