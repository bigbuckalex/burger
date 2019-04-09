let Orm = require("../config/orm");

let burger = {
    all: function(callback){
        Orm.selectAll((res)=>{
            callback(res);
        });
    },
    insert: function(name, devoured, callback){
        Orm.insertOne(name, devoured, (res)=>{
            callback(res);
        });
    },
    update: function(name, devoured, callback){
        Orm.updateOne(name, devoured, (res)=>{
            callback(res);
        });
    }
}

module.exports = burger;