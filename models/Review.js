const { DataTypes } = require("sequelize");
const { db } = require("../config/db");
const Game = require("./Game");

const Review = db.define("Review", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  review: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gameId: {
    type: DataTypes.INTEGER,
    references: {
      model: Game,
      key: "id",
    },
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Review.sync();

module.exports = Review;
