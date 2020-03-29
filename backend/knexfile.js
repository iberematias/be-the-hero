// Update with your config settings.

module.exports = {

  development: {
    //client: 'sqlite3',
    //connection: {
    //  filename: './dev.sqlite3'
    //}
    client: 'postgresql',
    connection: {
      database: 'usinati_bthero_dev',
      user:     'rocket',
      password: '@tsx3722'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'usinati_bthero',
      user:     'rocket',
      password: '@tsx3722'
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
      database: 'usinati_bthero_prod',
      user:     'rocket',
      password: '@tsx3722'
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
