exports.seed = async function(knex) {
  var num = 10000
  while (num > 0) {
    fakeImages = imageBatcher(knex);
    await knex('images')
      .insert(fakeImages)
    num--
  }
};

var car_id = 1;

var imageBatcher = function(knex) {
  const fakeImages = [];
  const target = 1000;
  for (var i = 0; i < target; i++) {
    var num = Math.floor(Math.random() * 6 + 3);
    while(num > 0) {
      fakeImages.push({
        car_id: car_id,
        image: 'http://lorempixel.com/640/480/transport/'
      })
      num--
    }
    car_id++
  }
  return fakeImages
};