const mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/web2-trabalho2');
mongoose.Promise = global.Promise;

module.exports = mongoose;
