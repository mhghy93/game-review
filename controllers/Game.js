const Game = require("../models/Game");

exports.getAllGames = (req, res) => {};

exports.getGameDetail = (req, res) => {};

exports.addGame = async (req, res) => {
  const { title, description, displayPic, trailerLink, category } = req.body;

  try {
    const game = await Game.create({
      title,
      description,
      displayPic,
      trailerLink,
      category,
    });

    res.json(game);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.editGame = (req, res) => {};

exports.deleteGame = (req, res) => {};
