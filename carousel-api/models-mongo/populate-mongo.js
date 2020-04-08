const models = require('./cars.js');

const Car = models.Cars;
const Image = models.Images;

console.log('populate-mongo running')

const carMakes = ['Toyota', 'BMW', 'Audi', 'Ford'];
const carModels = ['Tacoma', 'Corolla', 'i8', 'M4', 'Q7', 'R8', 'F-350', 'Escape']

const randomMake = () => carMakes[Math.floor(Math.random() * 4)];
const randomModel = () => carModels[Math.floor(Math.random() * 8)];

const createFakeCar = (id) => ({
  _id: id,
  make: randomMake(),
  model: randomModel(),
  year: Math.floor(Math.random() * 26 + 1995),
  created_at: new Date(),
  updated_at: new Date()
});


var carId = 1
function createAndInsertBatch(batchCounter) {
  if(batchCounter > 1000) {
    return 
  }

  var carCounter = 0
  var carsArray = [];

  while(carCounter < 10000) {
    var car = new Car(createFakeCar(carId));
    carsArray.push(car);
    carCounter++
    carId++
  }

  Car.collection.insert(carsArray, (err, docs) => {
    if (err) {
      console.log('error occurred: ', err)
    } else {
      console.log('success', batchCounter)
      createAndInsertBatch(batchCounter + 1)
    }
  })
}

createAndInsertBatch(1)

