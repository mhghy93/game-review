const Review = require("../models/Review");
const { Op } = require("sequelize");

exports.showAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { gameId: req.params.gameId },
    });
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
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
    res.status(500).send("Server error");
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
    res.status(500).send("Server error");
  }
};

exports.editReview = (req, res) => {};

exports.deleteReview = (req, res) => {};
