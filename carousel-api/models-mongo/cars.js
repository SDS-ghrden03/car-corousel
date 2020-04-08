const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/carsdb');

var db = mongoose.connection;

db.once('open', () => {
  console.log('Connection has been made with mongo db')
})
db.on('error', (error) => {
  console.log('Error: ', error)
})

const CarSchema = new Schema({
  _id: Number,
  make: String,
  model: String,
  year: Number,
  created_at: Date,
  updated_at: Date
});

const Cars = mongoose.model('cars', CarSchema);

const ImageSchema = new Schema({
  _id: Number,
  image: String,
  car_id: Number,
  created_at: Date,
  updated_at: Date
})

const Images = mongoose.model('images', ImageSchema);

module.exports = {
  Cars,
  Images
}