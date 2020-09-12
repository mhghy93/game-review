const express = require("express");
const router = express.Router();
const { isAuthorized } = require("../middleware/auth");
const { reviewValidations, validate } = require("../middleware/validations");
const reviewController = require("../controllers/Review");

router.get("/all", reviewController.showAllReviews);

router.get("/:id", reviewController.showReview);

router.post(
  "/add",
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

router.delete("delete/:id", isAuthorized, reviewController.deleteReview);

module.exports = router;
