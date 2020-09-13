const express = require("express");
const router = express.Router();
const { isAuthorized } = require("../middleware/auth");
const { reviewValidations, validate } = require("../middleware/validations");
const reviewController = require("../controllers/Review");

router.get("/:gameId/all", reviewController.showAllReviews);

router.get("/reviewDetails/:id", reviewController.showReview);

router.post(
  "/:gameId/add",
  isAuthorized,
  reviewValidations(),
  validate,
  reviewController.addReview
);

router.put(
  "/edit/:id",
  isAuthorized,
  reviewValidations(),
  validate,
  reviewController.editReview
);

router.delete("/delete/:id", isAuthorized, reviewController.deleteReview);

module.exports = router;
