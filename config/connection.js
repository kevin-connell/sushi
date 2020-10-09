var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)

} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Th1s1sn3w",
    database: "sushi_db"
  });
};

connection.connect(function (err) {
  if (err)
    throw err;
  console.log("Connected under id " + connection.threadId);
});

module.exports = connection;