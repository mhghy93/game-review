const { DataTypes } = require("sequelize");
const { db } = require("../config/db");

const Game = db.define("Game", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  displayPic: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trailerLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Game.sync();

module.exports = Game;
