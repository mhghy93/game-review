const express = require('express');
const { loginUserValidations, validate } = require('../middleware/validations');
const userController = require('../controllers/User');
const router = express.Router();

router.post(
  '/login',
  loginUserValidations(),
  validate,
  userController.adminLogin
);

module.exports = router;
