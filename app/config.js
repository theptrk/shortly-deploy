var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/localshortly', function() {
  console.log('connected to nago');
});



module.exports = db;
