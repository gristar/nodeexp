const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.use(function (req, res, next) {
    let body = req.body;
    let cookies = req.cookies;
    console.log(`body:${JSON.stringify(body)}`);
    console.log(`cookies:${JSON.stringify(cookies)}`);
    console.log('auth located');
    next();
});

module.exports = router;
