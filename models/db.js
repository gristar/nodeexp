/**
 * Created by gristar on 2017/7/12.
 */
const mongoose = require('mongoose');
const uri = 'mongodb://localhost';
const db = mongoose.createConnection(uri);

module.exports = db;
