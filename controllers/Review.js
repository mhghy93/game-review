const Review = require("../models/Review");
const Game = require("../models/Game");

exports.showAllReviews = (req, res) => {};

exports.showReview = (req, res) => {};

exports.addReview = async (req, res) => {
  const { review, rating } = req.body;
  const gameId = req.params.gameId;
  const userId = req.user.id;

  try {
    const isReviewed = await Review.findOne({ where: { gameId: gameId } });
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
