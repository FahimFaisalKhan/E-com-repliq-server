const express = require("express");
const { getAll } = require("../apis/users/users.get");
const {
  createUser,
  loginUser,
  logOutuser,
  updateUser,
} = require("../apis/users/users.post");
const router = express.Router();

/* GET users listing. */
router.get("/get-all", getAll);

router.post("/signup", createUser);

router.post("/login", loginUser);

router.post("/signout", logOutuser);

router.put("/update-user", updateUser);

module.exports = router;
