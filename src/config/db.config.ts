import config from "./config"; // this is important!

module.exports = {
  development: {
    username: config.database.dev.username,
    password: config.database.dev.password,
    database: config.database.dev.name,
    host: config.database.dev.host,
    dialect: config.database.dialect,
    sync: { alter: true } // automatic schema updates
  },
  test: {
    username: config.database.test.username,
    password: config.database.test.password,
    database: config.database.test.name,
    host: config.database.test.host,
    dialect: config.database.dialect,
    sync: { alter: true } // automatic schema updates
  },
  production: {
    username: config.database.production.username,
    password: config.database.production.password,
    database: config.database.production.name,
    host: config.database.production.host,
    dialect: config.database.dialect,
    sync: { alter: false } // disable automatic schema updates
  },
};
