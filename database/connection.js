const { Sequelize } = require("sequelize");

const connetion = new Sequelize("games", "root", "12345", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
  port: "3307",
});

module.exports = connetion;
