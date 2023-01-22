const mongoose = require("mongoose");

const { Schema } = mongoose;

const cartSchema = new Schema({
  title: { required: true, type: String },
  image: { required: true, type: String },
  quantity: { required: true, type: Number },
  stock: { required: true, type: Number },
  productId: { required: true, type: String },
  price: { required: true, type: Number },
  totalPrice: { required: true, type: Number },
  uid: { required: true, type: String },
});

const CartItems = mongoose.model("CartItem", cartSchema);

module.exports = CartItems;
