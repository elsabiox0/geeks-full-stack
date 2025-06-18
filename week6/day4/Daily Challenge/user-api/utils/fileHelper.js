const fs = require("fs");
const path = require("path");

const usersFile = path.join(__dirname, "../data/users.json");

function readUsers() {
  const data = fs.readFileSync(usersFile, "utf-8");
  return JSON.parse(data);
}

function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

module.exports = { readUsers, writeUsers };
