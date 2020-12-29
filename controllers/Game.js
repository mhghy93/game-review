const Game = require('../models/Game');
const Review = require('../models/Review');
const { Op } = require('sequelize');
const { getPagination, getPagingData } = require('../utils/pagination');

exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getPaginatedGames = async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);
  try {
    const games = await Game.findAndCountAll({ limit, offset });
    const paginatedGames = getPagingData(games, page, limit);
    res.json(paginatedGames);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getLatestGames = async (req, res) => {
  try {
    const games = await Game.findAll({
      order: [['createdAt', 'DESC']],
      limit: 3,
    });
    res.json(games);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const allCategories = await Game.findAll({
      attributes: ['category'],
    });
    let jsonObject = allCategories.map(JSON.stringify);
    let uniqueSet = new Set(jsonObject);
    let categories = Array.from(uniqueSet).map(JSON.parse);
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAllPlatforms = async (req, res) => {
  try {
    const allPlatforms = await Game.findAll({
      attributes: ['platform'],
    });
    let jsonObject = allPlatforms.map(JSON.stringify);
    let uniqueSet = new Set(jsonObject);
    let platforms = Array.from(uniqueSet).map(JSON.parse);
    res.json(platforms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.searchGames = async (req, res) => {
  try {
    const games = await Game.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: '%' + req.param('q') + '%' } },
          { category: { [Op.like]: '%' + req.param('q') + '%' } },
          { platform: { [Op.like]: '%' + req.param('q') + '%' } },
        ],
      },
    });
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

exports.getGamesByPlatform = async (req, res) => {
  try {
    const games = await Game.findAll({
      where: {
        platform: {
          [Op.like]: '%' + req.param('platform') + '%',
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
