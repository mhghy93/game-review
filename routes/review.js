const express = require('express');
const router = express.Router();
const { isAuthenticated, notAdmin } = require('../middleware/auth');
const { reviewValidations, validate } = require('../middleware/validations');
const reviewController = require('../controllers/Review');

router.get('/all', reviewController.showEveryReview);

router.get('/:gameId/all', reviewController.showAllReviews);

router.get('/:gameId/average', reviewController.showAverageRating);

router.get('/reviewDetails/:id', reviewController.showReview);

router.post(
  '/:gameId/add',
  isAuthenticated,
  notAdmin,
  reviewValidations(),
  validate,
  reviewController.addReview
);

router.put(
  '/edit/:id',
  isAuthenticated,
  notAdmin,
  reviewValidations(),
  validate,
  reviewController.editReview
);

router.delete(
  '/delete/:id',
  isAuthenticated,
  notAdmin,
  reviewController.deleteReview
);

module.exports = router;
