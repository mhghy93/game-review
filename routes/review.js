const express = require('express');
const router = express.Router();
const { isAuthorized, notAdmin } = require('../middleware/auth');
const { reviewValidations, validate } = require('../middleware/validations');
const reviewController = require('../controllers/Review');

router.get('/:gameId/all', reviewController.showAllReviews);

router.get('/reviewDetails/:id', reviewController.showReview);

router.post(
  '/:gameId/add',
  isAuthorized,
  notAdmin,
  reviewValidations(),
  validate,
  reviewController.addReview
);

router.put(
  '/edit/:id',
  isAuthorized,
  notAdmin,
  reviewValidations(),
  validate,
  reviewController.editReview
);

router.delete(
  '/delete/:id',
  isAuthorized,
  notAdmin,
  reviewController.deleteReview
);

module.exports = router;
