import express from 'express';
import cors from 'cors';

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
app.get('/cars', async (req, res) => {
  try {
    const cars = await database('cars').select();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ err });
  }
});

// Get all images for specific car
app.get('/cars/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  database('images')
    .where('car_id', id)
    .then(images => {
      if (images.length) {
        return res.status(200).json(images);
      } else {
        return res.status(404).json(`Images Not found with id: ${id}`);
      }
    })
    .catch(err => res.status(500).json({ err }));
});

// Get all images
app.get('/images', async (req, res) => {
  try {
    const images = await database('images').select();
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ err });
  }
});

export default app;