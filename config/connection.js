let mysql = require("mysql");

let PORT = process.env.PORT || 3306;

let connection = mysql.createConnection({
    host: "localhost",
    port: PORT,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;