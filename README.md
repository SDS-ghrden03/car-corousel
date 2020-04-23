# Car Carousel
This is a node.js images carousel, powered by React, Redux and Express that provides the basic styling and functions to display all images that are related to a single record (In this case a car.

![Car carousel](Demo/car-carousel.gif)

## Getting Started

### Prerequisites
A couple of things that you will need installed on your machine (check out their documentaion for installation instuctions)

1. [Postgresql](https://www.postgresql.org/download/)
2. [Docker](https://www.docker.com/products/docker-desktop)

##### Recommended
* [Nodemon](https://nodemon.io/)

### Installing
When you are located in the root of the project folder run the following command in the terminal:
```
npm install
```

### Intial Set-up

1. Create a .env file in the root of the project with the following key value pairs:
```
DB_DB=carsdb
DB_USER=(user name goes here)
DB_PW=(secret db password goes here)
```

2.If you would like to populate the database with fake users 

## Deployment

I deployed this project using Docker and AWS, the Dockerfile

## Built With
* Node.js
* Express
* React
* Redux
* SCSS
* Postgres
* Knex
* Docker

## License
