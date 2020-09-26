const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "cats_db"
});

connection.connect(function (error) {
    if (error) {
        throw error;
    }

    console.log(`Connected to database id ${connection.threadId}`);
});

connection.query = util.promisify(connection.query);

module.exports = connection;
