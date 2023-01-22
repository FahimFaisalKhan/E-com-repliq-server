const CartItems = require("../../models/cart");

exports.addItem = async (req, res) => {
  const { data } = req.body;
  const response = await CartItems.create(data);

  res.send(response);
};
exports.increaseQuantity = async (req, res) => {
  try {
    const { _id, quantity, totalPrice } = req.body;

    await CartItems.findOneAndUpdate(
      { _id },
      { quantity: quantity, totalPrice: totalPrice }
    );

    res.send({ status: "success" });
  } catch (err) {
    res.send({ status: "failed" });
  }
};

exports.compareUpdate = async (req, res) => {
  const { data } = req.body;

  data.forEach(
    async (i) =>
      await CartItems.findOneAndUpdate(
        { _id: i._id },
        { quantity: i.quantity, totalPrice: i.totalPrice },
        {
          upsert: true,
        }
      )
  );

  res.send({ s: "su" });
};
