const Game = require("../models/Game");

exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getGameDetail = async (req, res) => {
  try {
    const game = await Game.findOne({ where: { id: req.params.id } });
    res.json(game);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

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
