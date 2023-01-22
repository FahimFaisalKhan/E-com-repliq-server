const CartItems = require("../../models/cart");

exports.deleteItem = async (req, res) => {
  const id = req.query.id;

  const response = await CartItems.deleteOne({ _id: id });

  res.send(response);
};
