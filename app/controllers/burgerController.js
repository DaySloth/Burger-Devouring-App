const express = require('express');

const router = express.Router();

const burger = require('../models/burger');

router.get('/', function(req, res){
    burger.selectAll(function(data){
        //console.log(data);
        let orderedArr = [];
        let eatenArr = [];
        data.forEach(element => {
            if(element.isEaten === 0){
                element.isEaten = false;
                orderedArr.push(element);
            } else {
                element.isEaten = true;
                eatenArr.push(element);
            }
        });
        //console.log(orderedArr);
        //console.log(eatenArr);
        res.render("index", { ordered: orderedArr, eaten: eatenArr });
    });
});

router.put('/api/burgers/orders/:id', function(req, res){
    // console.log(req.body);
    burger.update(`isEaten = ${req.body.isEaten}`, 'id = '+req.params.id, function(result){
        //console.log(result);
        res.render('index')
    })
});

router.post('/api/burgers/orders', function(req, res){
    // console.log(req.body.burger_name);
    burger.create(req.body.burger_name, function(result){
        //console.log(result);
        res.status(200);
    });
});

router.delete('/api/burgers/orders/:id', function(req, res){
    burger.delete('id = '+req.params.id, function(data){
        //console.log(data);
        res.render('index');
    });
});





module.exports = router;