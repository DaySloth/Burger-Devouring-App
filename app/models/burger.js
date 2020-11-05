const orm = require("../config/orm");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result){
            cb(result);
        });
    },
    create: function(colVals, cb) {
        orm.create("burgers", "burger_name", colVals, function(result){
            cb(result);
        });
    },
    update: function(colVals, condition, cb) {
        orm.update("burgers", colVals, condition, function(result){
            cb(result);
        });
    },
    delete: function(condition, cb){
        orm.delete("burgers", condition, function(result){
            cb(result);
        });
    }
};

module.exports = burger;