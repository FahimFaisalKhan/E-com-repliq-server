const express = require("express");
const { deleteItem } = require("../apis/cart/cart.delete");
const { getItems } = require("../apis/cart/cart.get");
const {
  addItem,
  increaseQuantity,
  compareUpdate,
} = require("../apis/cart/cart.post");
const router = express.Router();

router.get("/get-items", getItems);
router.post("/add-item", addItem);
router.put("/increase-quantity", increaseQuantity);

router.put("/compare-update", compareUpdate);

router.delete("/delete-item", deleteItem);
module.exports = router;
