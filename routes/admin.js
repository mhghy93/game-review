const express = require('express');
const { loginUserValidations, validate } = require('../middleware/validations');
const adminController = require('../controllers/Admin');
const router = express.Router();

router.post(
  '/login',
  loginUserValidations(),
  validate,
  adminController.adminLogin
);

module.exports = router;
