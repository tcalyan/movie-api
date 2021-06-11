require('dotenv').config()
const Sequelize = require('sequelize');

var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host : process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect : process.env.DB_DIALECT
});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.movies = require('../models/movies.model')(sequelize, Sequelize);
db.comments = require('../models/comments.model')(sequelize, Sequelize);

db.movies.hasMany(db.comments, {as: "comments"});


module.exports = db;