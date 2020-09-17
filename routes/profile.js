const express = require('express');
const profileController = require('../controllers/Profile');
const router = express.Router();

router.get('/:id', profileController.showProfile);

router.put('/edit/:id', profileController.editProfile);

router.put('/delete/:id', profileController.deleteProfile);

module.exports = router;
