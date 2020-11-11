const express = require('express');
const {
  userValidations,
  loginUserValidations,
  validate,
} = require('../middleware/validations');
const userController = require('../controllers/User');
const router = express.Router();

router.post('/register', userValidations(), validate, userController.register);

router.post('/login', loginUserValidations(), validate, userController.login);

module.exports = router;
