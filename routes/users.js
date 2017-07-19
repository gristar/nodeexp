const express = require('express');
const router = express.Router();
const user = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/query/:id', function (req, res, next) {
    const id = req.params.id;
    console.log(id, 'user id');
    user.find(function(err, docs){
        if(err) return next(err);
        res.send(docs);
    })
});

router.get('/insert', function (req, res, next){
    res.render('users');
});

router.get('/insert/add', function (req, res, next){
    console.log(req.param);
});

module.exports = router;
