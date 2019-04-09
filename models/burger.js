let Orm = require("../config/orm");

let burger = {
    all: function(callback){
        Orm.selectAll(function(res){
            callback(res);
        });
    },
    insert: function(name, devoured, callback){
        Orm.insertOne(name, devoured, function(res){
            callback(res);
        });
    },
    update: function(name, devoured, callback){
        Orm.updateOne(name, devoured, function(res){
            callback(res);
        });
    }
}

module.exports = burger;