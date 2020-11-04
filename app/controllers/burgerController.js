const express = require('express');

const router = express.Router();

const burger = require('../models/burger');

router.get('/', function(req, res){
    burger.selectAll(function(data){
        console.log(data);
    });
});

router.get('/api/burgers/orders', function(req, res){
    burger.selectAll(function(data){
        console.log(data);
    });
});

router.put('/api/burgers/orders/:id', function(req, res){

});

router.post('/api/burgers/orders', function(req, res){

});

router.delete('/api/burgers/orders/:id', function(req, res){

});





module.exports = router;