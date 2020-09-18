const express = require('express');
const { isAuthorized } = require('../middleware/auth');
const profileController = require('../controllers/Profile');
const router = express.Router();

router.get('/', isAuthorized, profileController.showProfile);

router.put('/edit', isAuthorized, profileController.editProfile);

router.put('/delete', isAuthorized, profileController.deleteProfile);

module.exports = router;
