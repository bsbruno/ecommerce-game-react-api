const Sequelize = require("sequelize");
const connection = require("../database/connection");

const Games = connection.define("jogos", {
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  img: {
    type: Sequelize.BLOB,
  },
});

Games.sync({ force: false });

module.exports = Games;
