const express = require("express");
const getController = require("../apis/products/products.get");
const { addProduct } = require("../apis/products/products.post");

const router = express.Router();

router.get("/all", getController.getProducts);
router.get("/single", getController.getProduct);
router.get("/categories", getController.getCatagories);
router.post("/add", addProduct);

module.exports = router;
