// Update with your config settings.

/**
 /* @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'sql6.freesqldatabase.com',
      user: 'sql6490805',
      database: 'sql6490805',
      port: 3306,
      password: 'nNL4VluLHE',
    },
    migrations: {
      tableName: 'testapp-migrations',
    },
  },

  /*  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  } */
};
