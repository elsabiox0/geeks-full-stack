const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.register = async (req, res) => {
  try {
    const { email, username, first_name, last_name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.createUserWithPassword(
      { email, username, first_name, last_name },
      hashedPassword
    );
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.getUserByUsername(username);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    res.json({ message: 'Login successful', user: { id: user.id, username: user.username } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updated = await User.updateUserById(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User updated', user: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
