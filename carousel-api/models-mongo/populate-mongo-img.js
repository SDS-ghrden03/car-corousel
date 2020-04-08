const models = require('./cars.js');

const Image = models.Images;

console.log('populate-mongo-img running')

const createFakeImage = (id, car_id) => ({
  _id: id,
  image: 'http://lorempixel.com/640/480/transport/',
  car_id: car_id,
  created_at: new Date(),
  updated_at: new Date()
});


var carId = 1
var id = 1

function createAndInsertBatch(batchCounter) {
  if(batchCounter > 10000) {
    return 
  }

  var carCounter = 0
  var imagesArray = [];

  while(carCounter < 1000) {
    var num = Math.floor(Math.random() * 6 + 3);
    while(num > 0) {
      var image = new Image(createFakeImage(id, carId));
      imagesArray.push(image);
      num--
      id++
    }
    carCounter++
    carId++
  }

  Image.collection.insert(imagesArray, (err, docs) => {
    if (err) {
      console.log('error occurred: ', err)
    } else {
      console.log('success', batchCounter)
      createAndInsertBatch(batchCounter + 1)
    }
  })
}

createAndInsertBatch(1)