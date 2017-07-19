/**
 * Created by gristar on 2017/7/12.
 */
const Schema = require('mongoose').Schema;
const User = Schema({username: String, password: String});
const db = require('./db');

module.exports = db.model('User', User);