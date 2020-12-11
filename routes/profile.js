const express = require('express');
const { isAuthenticated, notAdmin } = require('../middleware/auth');
const {
  profileUpdateValidations,
  validate,
} = require('../middleware/validations');
const profileController = require('../controllers/Profile');
const router = express.Router();

router.get('/', notAdmin, isAuthenticated, profileController.showProfile);

router.put(
  '/edit',
  notAdmin,
  isAuthenticated,
  profileUpdateValidations(),
  validate,
  profileController.editProfile
);

router.delete(
  '/delete',
  notAdmin,
  isAuthenticated,
  profileController.deleteProfile
);

module.exports = router;
