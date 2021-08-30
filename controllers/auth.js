const User = require("../models/User");
const ErrorResponse = require("../utils/ErrorResponse");

exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.create({ username, email, password });

    res.status(201).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorResponse("Please provide email and address", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    const isMatchPassword = await user.matchPassword(password);

    if (!isMatchPassword) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    res.status(200).json({ success: true, token: "3jiosfeosej" });
  } catch (error) {
    next(error);
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
