import express from 'express';
import cors from 'cors';

const db = require('./models-mongo/cars.js');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../carousel-ui2/dist')));
app.use(express.json());
app.use(cors());


// app.get('/cars', async (req, res) => {
//   try {
//     const cars = await database('cars').where('id', '<', 100);
//     res.status(200).json(cars);
//   } catch (err) {
//     res.status(500).json({ err });
//   }
// })

// Get all images for specific car
// app.get('/cars/:id', async (req, res) => {
//   const id = parseInt(req.params.id);
//   database('cars')
//     .where('id', id)
//     .then(car => {
//       if (car) {
//         database('images')
//           .where('car_id', id)
//           .then(images => {
//             if (images.length) {
//               car[0].images = images;
//               return res.status(200).json(car)
//             } else {
//               return res.status(404).json(`Images Not found with car_id: ${id}`)
//             }
//           })
//       } else {
//         return res.status(404).json(`Car Not found with id: ${id}`);
//       }
//     })
//     .catch(err => res.status(500).json({ err }));
// });

app.get('/cars/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  db.Cars.find({ _id: id }, (err, car) => {
    if (err) {
      res.status(404).json(`Car Not found with id: ${id}`);
    } else {
      car = JSON.parse(JSON.stringify(car))
      db.Images.find({ car_id: id}, (err, images) => {
        if (err) {
          res.status(404).json(`Images Not found with car_id: ${id}`)
        } else {
          images = JSON.parse(JSON.stringify(images));
          car[0].images = images;
          res.status(200).json(car);
        }
      })
    }
  })
})

// // Get all images
// app.get('/images', async (req, res) => {
//   const params = req.query;
//   try {
//     const images = await database('images').where('id', '<', 100);
//     res.status(200).json(images);
//   } catch (err) {
//     res.status(500).json({ err });
//   }
// });

// //create a car
// app.post('/cars', async (req, res) => {
//   database('cars')
//     .insert(req.body)
//     .then(response => {
//       return res.status(201).json(response)
//     })
//     .catch(err => {
//       res.status(401).json('could not insert record to db')
//     })
// })

// //update a car
// app.put('/cars/:id', async (req, res) => {
//   const id = parseInt(req.params.id);
//   database('cars')
//     .where('id', id)
//     .update(req.body)
//     .then(response => {
//       return res.status(202).json('successfully updated record')
//     })
//     .catch(err => {
//       res.status(403).json({ err })
//     })
// })

// //delete a car
// app.delete('/cars/:id', async(req, res) => {
//   const id = parseInt(req.params.id);
//   database('cars')
//     .where('id', id)
//     .del()
//     .then(response => {
//       return res.status(210).json('successfully deleted')
//     })
//     .catch(err => res.status(510).json({ err }));
// })

export default app;