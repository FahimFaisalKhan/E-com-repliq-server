const CartItems = require("../../models/cart");

exports.getItems = async (req, res) => {
  const { uid } = req.query;
  const response = await CartItems.find({ uid: uid }).exec();

  res.send(response);
};
