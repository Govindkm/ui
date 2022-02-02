const mongoose = require("mongoose");

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  password: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, "Please fill a valid email address"],
  },
});

module.exports = mongoose.model("User", userSchema);
