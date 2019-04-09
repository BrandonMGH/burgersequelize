const connection = require("./connection");

const orm = {
    selectAll: function(tableName, callback){
        connection.query("SELECT * FROM ??", [tableName], (err, results) => {
            if (err) {
                throw err;
            }
            callback(results)
        });
    },
    insertOne: function(tableName, objectCreate, callback){
        connection.query("INSERT INTO ?? SET ?", [tableName, objectCreate], (err, results) =>{
            if(err) {
                throw err;
            }
            callback(results)
        });

    },
    updateOne: function(tableName, objectCreate, id, callback){
        connection.query("UPDATE ?? SET ? WHERE id = ?", [tableName, objectCreate, id], (err, results) => {
            if(err) {
                throw err;
            }
            callback(results)
        });

    },

    deleteOne: function(tableName, col, id, callback){
        connection.query("DELETE FROM ?? WHERE ?? = ?", [tableName, col, id], (err, results) => {
            if(err) {
                throw err;
            }
            callback(results)
        });
    },
    
}

module.exports = orm;

