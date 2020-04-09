const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/carsdb');

var db = mongoose.connection;

db.once('open', () => {
  console.log('Connection has been made with mongo db')
})
db.on('error', (error) => {
  console.log('Error: ', error)
})

exports.module = db;