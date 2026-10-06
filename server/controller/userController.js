const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const id = await User.createUser(email, password);
    return res.status(201).json({ id });
  } catch (error) {
    return res.status(500).json({ message: "Error creating user!" });
  }
};
