const carMakes = ['Toyota', 'BMW', 'Audi', 'Ford'];
const carModels = ['Tacoma', 'Corolla', 'i8', 'M4', 'Q7', 'R8', 'F-350', 'Escape']

const randomMake = () => carMakes[Math.floor(Math.random() * 4)];
const randomModel = () => carModels[Math.floor(Math.random() * 8)];

const createFakeCar = () => ({
  make: randomMake(),
  model: randomModel(),
  year: Math.floor(Math.random() * 26 + 1995)
});

exports.seed = async function(knex) {
  var num = 1//How many times would you like to create a batch and insert it into the database
  while (num > 0) {
    fakeCars = batcher(knex);
    await knex('cars')
      .insert(fakeCars)
    num--
  }
};

var batcher = function(knex) {
  const fakeCars = [];
  const target = 1//How many records do you want to include in each batch (Do not exceed 10,000 records in each batch)
  for (var i = 0; i < target; i++) {
    fakeCars.push(createFakeCar());
  }
  return fakeCars;
};
