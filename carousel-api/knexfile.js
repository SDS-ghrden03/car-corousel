module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_CONNECTION,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_DB,
      user:     process.env.DB_USER,
      password: process.env.DB_PW
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
