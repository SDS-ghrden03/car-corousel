const express = require('express');
const cors = require('cors');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../carousel-ui2/dist')));
app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//   res.render('index.html');
// });
// Get all Cars
// app.get('/cars', async (req, res) => {
//   console.log('request made for all 10M cars')
//   try {
//     const cars = await database('cars').select();
//     res.status(200).json(cars);
//   } catch (err) {
//     res.status(500).json({ err });
//   }
// });

app.get('/cars', async (req, res) => {
  try {
    const cars = await database('cars').where('id', '<', 100);
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ err });
  }
})

// Get all images for specific car
app.get('/cars/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  database('cars')
    .where('id', id)
    .then(car => {
      if (car) {
        database('images')
          .where('car_id', id)
          .then(images => {
            if (images.length) {
              car[0].images = images;
              return res.status(200).json(car)
            } else {
              return res.status(404).json(`Images Not found with car_id: ${id}`)
            }
          })
      } else {
        return res.status(404).json(`Car Not found with id: ${id}`);
      }
    })
    .catch(err => res.status(500).json({ err }));
});

// Get all images
app.get('/images', async (req, res) => {
  const params = req.query;
  try {
    const images = await database('images').where('id', '<', 100);
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ err });
  }
});

//create a car
app.post('/cars', async (req, res) => {
  database('cars')
    .insert(req.body)
    .then(response => {
      return res.status(201).json(response)
    })
    .catch(err => {
      res.status(401).json('could not insert record to db')
    })
})

//update a car
app.put('/cars/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  database('cars')
    .where('id', id)
    .update(req.body)
    .then(response => {
      return res.status(202).json('successfully updated record')
    })
    .catch(err => {
      res.status(403).json({ err })
    })
})

//delete a car
app.delete('/cars/:id', async(req, res) => {
  const id = parseInt(req.params.id);
  database('cars')
    .where('id', id)
    .del()
    .then(response => {
      return res.status(210).json('successfully deleted')
    })
    .catch(err => res.status(510).json({ err }));
})

module.exports = app;