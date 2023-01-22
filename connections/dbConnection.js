const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect(
    "mongodb+srv://Fahim_Admin:arkotoO0_@mongobasics-cluster.xxxwrvw.mongodb.net/repliq?retryWrites=true&w=majority"
  );

  if (mongoose.connection.readyState) {
    return true;
  }

  return false;
};
