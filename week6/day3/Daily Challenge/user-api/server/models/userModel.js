const pool = require('../config/db');

exports.createUserWithPassword = async (user, hashedPassword) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const insertUserQuery = `
      INSERT INTO users (email, username, first_name, last_name)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const userRes = await client.query(insertUserQuery, [
      user.email,
      user.username,
      user.first_name,
      user.last_name,
    ]);

    const insertPasswordQuery = `
      INSERT INTO hashpwd (username, password)
      VALUES ($1, $2);
    `;
    await client.query(insertPasswordQuery, [user.username, hashedPassword]);

    await client.query('COMMIT');
    return userRes.rows[0];
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};

exports.getUserByUsername = async (username) => {
  const res = await pool.query(
    'SELECT u.*, h.password FROM users u JOIN hashpwd h ON u.username = h.username WHERE u.username = $1',
    [username]
  );
  return res.rows[0];
};

exports.getAllUsers = async () => {
  const res = await pool.query('SELECT * FROM users');
  return res.rows;
};

exports.getUserById = async (id) => {
  const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return res.rows[0];
};

exports.updateUserById = async (id, data) => {
  const { email, first_name, last_name } = data;
  const res = await pool.query(
    'UPDATE users SET email=$1, first_name=$2, last_name=$3 WHERE id=$4 RETURNING *',
    [email, first_name, last_name, id]
  );
  return res.rows[0];
};
