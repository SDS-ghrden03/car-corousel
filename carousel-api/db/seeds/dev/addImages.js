exports.seed = async function(knex) {
  var num = 1
  while (num > 0) {
    console.log(num, ' batches to go')
    fakeImages = imageBatcher(knex);
    await knex('images')
      .insert(fakeImages)
    num--
  }
};

var car_id = 9999205;

var imageBatcher = function(knex) {
  const fakeImages = [];
  const target = 796;
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