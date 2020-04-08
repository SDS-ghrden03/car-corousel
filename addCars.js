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
  var num = 1000
  while (num > 0) {
    fakeCars = batcher(knex);
    await knex('cars')
      .insert(fakeCars)
    num--
  }
};

//make the function repeat itself many times to achieve the 10M number

var batcher = function(knex) {
  const fakeCars = [];
  const target = 10000;
  for (var i = 0; i < target; i++) {
    fakeCars.push(createFakeCar());
  }
  return fakeCars;
};
