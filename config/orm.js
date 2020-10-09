const connection = require("./connection");

class ORM {
    constructor(connection) {
        this.connection = connection
    };

    selectAll() {
        return this.connection.query(
            `SELECT id, name, eaten FROM sushi`
        );
    };

    insertOne(sushi_name) {
        return this.connection.query("INSERT INTO sushi SET ?", sushi_name);

    };

    updateOne(eaten, id) {
        return this.connection.query(
            "UPDATE sushi SET eaten = ? WHERE id = ?",
            [eaten, id]
        );
    };
}

module.exports = new ORM (connection)