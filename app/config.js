<<<<<<< HEAD
var mongoose = require('mongoose');
var mongoUrl = process.env.MONGO_LABS_URL || 'mongodb://localhost/localshortly'
var db = mongoose.connect(mongoUrl, function() {
  console.log('connected to mango', mongoUrl);
=======
var Bookshelf = require('bookshelf');
var path = require('path');

var db = Bookshelf.initialize({
  client: 'sqlite3',
  connection: {
    host: process.env.dbhost || '127.0.0.1',
    user: process.env.dbuser || 'your_database_user',
    password: process.env.dbpassword || 'password',
    database: process.env.dbdatabase || 'shortlydb',
    charset: process.env.dbcharset || 'utf8',
    filename: process.env.filename || path.join(__dirname, '../db/shortly.sqlite')
  }
>>>>>>> master
});



module.exports = db;
