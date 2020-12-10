const express = require('express');
const { isAuthenticated, notAdmin } = require('../middleware/auth');
const {
  profileUpdateValidations,
  validate,
} = require('../middleware/validations');
const profileController = require('../controllers/Profile');
const router = express.Router();

router.get('/', isAuthenticated, notAdmin, profileController.showProfile);

router.put(
  '/edit',
  isAuthenticated,
  notAdmin,
  profileUpdateValidations(),
  validate,
  profileController.editProfile
);

router.delete(
  '/delete',
  isAuthenticated,
  notAdmin,
  profileController.deleteProfile
);

module.exports = router;
