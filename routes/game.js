const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const { gameValidations, validate } = require('../middleware/validations');
const gameController = require('../controllers/Game');

router.get('/all', gameController.getAllGames);

router.get('/', gameController.getGamesByCategory);

router.get('/:id', gameController.getGameDetail);

router.post(
  '/admin/add',
  isAuthenticated,
  isAdmin,
  gameValidations(),
  validate,
  gameController.addGame
);

router.put(
  '/admin/edit/:id',
  isAuthenticated,
  isAdmin,
  gameValidations(),
  validate,
  gameController.editGame
);

router.delete(
  '/admin/delete/:id',
  isAuthenticated,
  isAdmin,
  gameController.deleteGame
);

module.exports = router;
