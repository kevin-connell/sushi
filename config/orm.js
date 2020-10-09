const connection = require("./connection");

class ORM {
    constructor(connection) {
        this.connection = connection
    };

    selectAll(table, cb) {

        connection.query("SELECT id, name, eaten FROM ??", [table], function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
        });

    };

    insertOne(table, name, cb) {

        console.log(`INSERT INTO ${table} (name) VALUES ?`)

        connection.query("INSERT INTO ?? (name) VALUES ?", [table, name], function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
        });

    };

    updateOne(table, eaten, id, cb) {

        console.log(table + eaten + id)

        connection.query("UPDATE ?? SET eaten = ? WHERE id = ?",
        [table, eaten, id], function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
        });
    };
}

module.exports = new ORM (connection)