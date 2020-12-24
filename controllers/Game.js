const Game = require('../models/Game');
const Review = require('../models/Review');
const { Op } = require('sequelize');

exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getGamesByCategory = async (req, res) => {
  try {
    const games = await Game.findAll({
      where: {
        category: {
          [Op.like]: '%' + req.param('category') + '%',
        },
      },
    });
    res.json(games);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getGameDetail = async (req, res) => {
  try {
    const game = await Game.findOne({ where: { id: req.params.id } });
    res.json(game);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addGame = async (req, res) => {
  const {
    title,
    description,
    displayPic,
    trailerLink,
    category,
    platform,
  } = req.body;

  try {
    const game = await Game.create({
      title,
      description,
      displayPic,
      trailerLink,
      category,
      platform,
    });

    res.json(game);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.editGame = async (req, res) => {
  try {
    const {
      title,
      description,
      displayPic,
      trailerLink,
      category,
      platform,
    } = req.body;

    await Game.update(
      {
        title: title,
        description: description,
        displayPic: displayPic,
        trailerLink: trailerLink,
        category: category,
        platform: platform,
      },
      { where: { id: req.params.id } }
    );
    res.json({ msg: 'Successfully updated' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteGame = async (req, res) => {
  try {
    await Review.destroy({ where: { gameId: req.params.id } });
    await Game.destroy({ where: { id: req.params.id } });
    res.json({ msg: 'Game Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
