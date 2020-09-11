const express = require("express");
const reviewController = require("../controllers/Review");
const router = express.Router();

router.get("/all", reviewController.showAllReviews);

router.get("/:id", reviewController.showReview);

router.post("/add", reviewController.addReview);

router.put("/edit/:id", reviewController.editReview);

router.delete("delete/:id", reviewController.deleteReview);

module.exports = router;
