require('dotenv').config()
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'ec2-54-215-239-234.us-west-1.compute.amazonaws.com',
      database: process.env.DB_DB,
      user:     process.env.DB_USER,
      password: process.env.DB_PW,
    },
    migrations: {
      directory: './carousel-api/db/migrations'
    },
    seeds: {
      directory: './carousel-api/db/seeds/dev'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: {
      host: 'ec2-54-215-239-234.us-west-1.compute.amazonaws.com',
      database: process.env.DB_DB,
      user:     process.env.DB_USER,
      password: process.env.DB_PW,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './carousel-api/db/migrations'
    },
    seeds: {
      directory: './carousel-api/db/seeds/dev'
    },
  }

};
