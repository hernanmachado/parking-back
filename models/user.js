const db = require('./db');
const bcrypt = require('bcrypt');

const User = {
  create: (data, callback) => {
    const saltRounds = 10;
    bcrypt.hash(data.password_user, saltRounds, (err, hash) => {
      if (err) throw err;
      const sql = 'INSERT INTO users (username_user, password_user, type) VALUES (?, ?, ?)';
      db.query(sql, [data.username_user, hash, data.type], callback);
    });
  },

  findByUsername: (username_user, callback) => {
    const sql = 'SELECT * FROM users WHERE username_user = ?';
    db.query(sql, [username_user], callback);
  },

  findById: (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], callback);
  },

  update: (id, data, callback) => {
    const sql = 'UPDATE users SET username_user = ?, type = ? WHERE id = ?';
    db.query(sql, [data.username_user, data.type, id], callback);
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], callback);
  },

  getAll: (callback) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, callback);
  }
};

module.exports = User;


