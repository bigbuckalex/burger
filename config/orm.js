connection = require("./connection");

let Orm = {
    selectAll: function(callback){
        connection.query("SELECT * FROM burgers;", function(err, data){
            if (err) throw err;
            callback(data);
        });
    },
    insertOne: function(name , devoured, callback){
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES ("+name+","+devoured+");", function(err, data){
            if (err) throw err;
            callback(data);
        });
    },
    updateOne: function(name, devoured, callback){
        connection.query("UPDATE burgers SET devoured="+!devoured+" WHERE burger_name="+name+";", function(err, data){
            if (err) throw err;
            callback(data);
        });
    }
}

module.exports = Orm;