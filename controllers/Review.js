const Review = require('../models/Review');
const Game = require('../models/Game');
const { Op } = require('sequelize');
const { sequelize } = require('../models/Review');

exports.showEveryReview = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.showAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { gameId: req.params.gameId },
    });
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.showAverageRating = async (req, res) => {
  try {
    const averageRating = await Review.findOne({
      attributes: [
        'gameId',
        [sequelize.fn('avg', sequelize.col('rating')), 'averageRating'],
      ],
      where: { gameId: req.params.gameId },
    });
    res.json(averageRating);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.showReview = async (req, res) => {
  try {
    const reviewDetails = await Review.findOne({
      where: { id: req.params.id },
    });
    res.json(reviewDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addReview = async (req, res) => {
  const { review, rating } = req.body;
  const gameId = req.params.gameId;
  const userId = req.user.id;

  try {
    const isReviewed = await Review.findOne({
      where: {
        [Op.and]: [{ gameId: gameId }, { userId: userId }],
      },
    });
    if (isReviewed) {
      return res
        .status(400)
        .json({ errors: [{ msg: "You can't review a game more than once" }] });
    }
    const userReview = await Review.create({
      review,
      gameId,
      userId,
      rating,
    });
    res.json(userReview);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.editReview = async (req, res) => {
  const { review, rating } = req.body;

  try {
    const isUser = await Review.findOne({
      where: {
        [Op.and]: [{ id: req.params.id }, { userId: req.user.id }],
      },
    });
    if (!isUser) {
      return res.status(401).json({ msg: 'authorization denied' });
    }

    await Review.update(
      {
        review: review,
        rating: rating,
      },
      { where: { id: req.params.id } }
    );
    res.json({ msg: 'Successfully updated' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const isUser = await Review.findOne({
      where: {
        [Op.and]: [{ id: req.params.id }, { userId: req.user.id }],
      },
    });
    if (!isUser) {
      return res.status(401).json({ msg: 'authorization denied' });
    }

    await Review.destroy({ where: { id: req.params.id } });
    res.json({ msg: 'Review Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
