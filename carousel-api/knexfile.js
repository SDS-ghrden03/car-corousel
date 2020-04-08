module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/carsdb',
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
      database: 'carsdb',
      user:     'trevorbell',
      password: 'db2355'
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
