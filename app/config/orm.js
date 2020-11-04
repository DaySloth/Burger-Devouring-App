const connection = require('./connection');

const orm = {
    selectAll: function(table, cb) {
        let query = "SELECT * FROM " + table;
        connection.query(query, function(err, result){
            if(err) throw err;

            cb(result);
        });
    },
    create: function(table, cols, vals, cb){
        let query = "INSERT INTO "+ table +" ("+cols+")"+" VALUES ("+vals+")";
        
        connection.query(query, function(err, result){
            if(err) throw err;

            cb(result);
        });
    },
    
};

module.exports = orm;