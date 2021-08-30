const User = require("../models/User");

exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.create({ username, email, password });

    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    res.send("This is login route");
  } catch (error) {}
};

exports.forgotPassword = async (req, res, next) => {
  try {
    res.send("This is forgot password route");
  } catch (error) {}
};

exports.resetPassword = async (req, res, next) => {
  try {
    res.send("This is reset password route");
  } catch (error) {}
};
