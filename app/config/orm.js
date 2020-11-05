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
        let query = "INSERT INTO "+ table +" ("+cols+")"+" VALUES ('"+vals+"')";
        
        connection.query(query, function(err, result){
            if(err) throw err;

            cb(result);
        });
    },
    update: function(table, colVals, condition, cb){
        let query = "UPDATE "+table+" SET "+colVals+" WHERE "+condition;

        //console.log(query);
        connection.query(query, function(err, result){
            if(err) throw err;
            
            cb(result);
        });
    },
    delete: function(table, condition, cb){
        let query = "DELETE FROM "+table+" WHERE "+condition;

        connection.query(query, function(err, result){
            if(err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;