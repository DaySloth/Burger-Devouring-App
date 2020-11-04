const express = require('express');

const router = express.Router();

const burger = require('../models/burger');

router.get('/', function(req, res){
    burger.selectAll(function(data){
        console.log(data);
        res.render("index", { burgers: data });
    });
});

router.put('/api/burgers/orders/:id', function(req, res){
    console.log(req.body);
});

router.post('/api/burgers/orders', function(req, res){
    console.log(req.body);
});

router.delete('/api/burgers/orders/:id', function(req, res){
    burger.delete(req.params.id, function(data){
        console.log(data);
    });
});





module.exports = router;