const Users = require("../../models/user");

exports.getAll = async (req, res) => {
  const users = await Users.find({ role: "user" }).exec();

  res.send(users);
};
