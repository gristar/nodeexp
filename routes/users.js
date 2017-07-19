const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', function (req, res, next) {
    User.find(function(err, docs){
        if(err) return next(err);
        res.render('users', {list:docs});
    });
});

router.get('/query/:id', function (req, res, next) {
    const id = req.params.id;
    console.log(id, 'user id');
    User.findOne({id:id},function(err, docs){
        if(err) return next(err);
        res.send(docs);
    })
});

router.get('/insert', function (req, res, next){
    res.render('user-add');
});

router.get('/insert/add', function (req, res, next){
    new User(req.body).save(function(err, user){
        if(err) return next(err);
        res.location('/users');
    });
});

module.exports = router;
