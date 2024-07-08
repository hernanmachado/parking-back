const mysql = require('mysql');
const bcrypt = require('bcrypt');
const async = require('async');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos.');

  const saltRounds = 10;
  const users = [
    { username_user: 'hernan', password_user: '1234A', type: 'admin' },
    { username_user: 'sebita', password_user: '1234B', type: 'admin' },
    { username_user: 'christian', password_user: '1234C', type: 'admin' }
  ];

  async.eachSeries(users, (user, callback) => {
    bcrypt.hash(user.password_user, saltRounds, (err, hash) => {
      if (err) return callback(err);
      const sql = 'UPDATE users SET password_user = ? WHERE username_user = ?';
      connection.query(sql, [hash, user.username_user], (err, result) => {
        if (err) return callback(err);
        console.log(`Contraseña de ${user.username_user} actualizada.`);
        callback();
      });
    });
  }, (err) => {
    if (err) throw err;
    connection.end(err => {
      if (err) throw err;
      console.log('Conexión a la base de datos cerrada.');
    });
  });
});


// esto no tiene funcionalidad es un codigo para introducir por js el dato en la db