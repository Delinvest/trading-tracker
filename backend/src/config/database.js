const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DATABASE_URL) {
  // Production - utilise DATABASE_URL
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  // Development - utilise les variables individuelles
  sequelize = new Sequelize(
    process.env.DB_NAME || 'trading_tracker',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || 'password',
    {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      dialect: 'postgres',
      logging: false,
    }
  );
}

module.exports = sequelize;