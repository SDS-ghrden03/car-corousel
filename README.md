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

2. If you would like to populate the database with fake cars and images edit the variables in the following files '/carousel-api/db/seeds/dev/addImages.js' & '/carousel-api/db/seeds/dev/addCars.js'.  There are comments that show you which variables to edit. 

3. Run the following commands in the command line 
```
npx knex migrate:latest --env development
```
```
npx knex seed:run --env development
```

## Deployment

I deployed this project using Docker and AWS.  The Dockerfiles and docker-compose files are included in this repository.  The database was deployed and populated with over 60 million records on an EC2 instance.  The service itself was deployed onto 5 seperate EC2 instances and were all connected using a load-balancer from AWS. I also deployed a redis-caching layer that improved response time, it is avaible in the following [repo-link.](https://github.com/SDC-ghrden03/redis-cache) This is a representation of a proxy server that served the car-carousel microservice as well as other microservices from project members to create a replica of a used car dealership car page. 

![Proxy Server Demo](Demo/car-carousel-proxy.gif)

This [link will take you to that repository](https://github.com/SDC-ghrden03/trevor-proxy)

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
