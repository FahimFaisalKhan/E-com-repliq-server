const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Users = require("../../models/user");

const generateToken = (data) => {
  const token = jwt.sign(
    data,
    "3b07d90080201b1d7052390818a2c3d8d79b6c5c52a792385558761a7208783c1dc7f3613ef7de1b95bbf14934ef30e49908936723b836c186d9d4b187d8868f"
  );

  return token;
};
exports.createUser = async (req, res) => {
  console.log(req.body);
  const data = req.body;
  const userExists = await Users.exists({ email: data.email });
  const token = !data.role && generateToken(data);

  const role = data.role ? data.role : "user";
  if (!userExists) {
    try {
      const user = await Users.create({
        role: role,
        ...data,
      });
      data.role
        ? res.send({ success: true, user: user.toJSON() })
        : res.send({ success: true, user: user.toJSON(), token: token });
    } catch (err) {
      res.send({
        success: false,
        error: "1 Something went wrong, Please try again.",
      });
    }
  } else {
    res.send({ success: false, error: "User already exist please login." });
  }
};

exports.loginUser = async (req, res) => {
  const { password, email } = req.body;
  const user = await Users.findOne({ email: email });
  if (user) {
    const name = user.name;
    const phone = user.phone;
    if (
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password === password
    ) {
      const token = generateToken({ name, email, phone, password });
      await Users.findOneAndUpdate({ _id: user._id }, { loggedin: true });
      res.send({ success: true, token: token, user: user });
    } else {
      res.send({ success: false, error: "Invalid credentials" });
    }
  } else {
    res.send({ success: false, error: "No user found, Please register" });
  }
};

exports.logOutuser = async (req, res) => {
  const { uid } = req.body;
  try {
    await Users.findByIdAndUpdate({ _id: uid }, { loggedin: false });
    res.send({ success: true });
  } catch (err) {
    concole.log(err.message);
  }
};
exports.updateUser = async (req, res) => {
  const { uid, loggedin } = req.body;

  try {
    const user = await Users.findByIdAndUpdate(
      { _id: uid },
      { loggedin: loggedin }
    );

    res.send({ success: true, user: user });
  } catch (err) {
    console.log(err.message);
  }
};
