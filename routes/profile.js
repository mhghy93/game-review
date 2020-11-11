const express = require('express');
const { isAuthenticated } = require('../middleware/auth');
const {
  profileUpdateValidations,
  validate,
} = require('../middleware/validations');
const profileController = require('../controllers/Profile');
const router = express.Router();

router.get('/', isAuthenticated, profileController.showProfile);

router.put(
  '/edit',
  isAuthenticated,
  profileUpdateValidations(),
  validate,
  profileController.editProfile
);

router.delete('/delete', isAuthenticated, profileController.deleteProfile);

module.exports = router;
