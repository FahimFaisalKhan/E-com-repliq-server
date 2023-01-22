const mongoose = require("mongoose");

const { Schema } = mongoose;

const productsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },

  discountPercentage: {
    type: Number,

    min: 0,
    max: 100,
  },
  rating: Number,

  stock: { required: true, type: Number },
  brand: String,
  category: { required: true, type: String },
  thumbnail: { required: true, type: String },
  fullDescription: String,
  images: [String],
});

const Product = mongoose.model("Product", productsSchema);

module.exports = Product;
