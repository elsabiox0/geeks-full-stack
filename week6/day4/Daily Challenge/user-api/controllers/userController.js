const bcrypt = require("bcrypt");
const { readUsers, writeUsers } = require("../utils/fileHelper");
const { v4: uuid } = require("uuid");

exports.register = (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  if (!firstName || !lastName || !email || !username || !password)
    return res.status(400).send("All fields are required");

  const users = readUsers();
  const exists = users.find(u => u.username === username);
  if (exists) return res.status(400).send("Username already exists");

  const hashed = bcrypt.hashSync(password, 10);
  const newUser = { id: uuid(), firstName, lastName, email, username, password: hashed };
  users.push(newUser);
  writeUsers(users);
  res.send("Hello Your account is now created!");
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).send("User not found");

  const valid = bcrypt.compareSync(password, user.password);
  if (!valid) return res.status(401).send("Invalid credentials");

  res.send(`Hi ${username} welcome back again!`);
};

exports.getAllUsers = (req, res) => {
  res.json(readUsers());
};

exports.getUserById = (req, res) => {
  const user = readUsers().find(u => u.id === req.params.id);
  user ? res.json(user) : res.status(404).send("User not found");
};

exports.updateUserById = (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).send("User not found");

  users[index] = { ...users[index], ...req.body };
  writeUsers(users);
  res.send("User updated successfully");
};
