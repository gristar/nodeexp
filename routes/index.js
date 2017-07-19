const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('visitor', 'chensheng');
  res.render('index');
});

module.exports = router;
