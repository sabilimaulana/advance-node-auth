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
    const { email, password } = req.body;

    if (!email || !password) {
      res
        .status(400)
        .json({ success: false, error: "Please provide email and address" });
      return;
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      res.status(404).json({ success: false, error: "Invalid credentials" });
      return;
    }

    const isMatchPassword = await user.matchPassword(password);

    if (!isMatchPassword) {
      res.status(404).json({ success: false, error: "Invalid credentials" });
      return;
    }

    res.status(200).json({ success: true, token: "3jiosfeosej" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
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
