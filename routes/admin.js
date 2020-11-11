const express = require('express');
const { loginUserValidations, validate } = require('../middleware/validations');
const { isAdmin } = require('../middleware/auth');
const adminController = require('../controllers/Admin');
const router = express.Router();

router.post(
  '/login',
  loginUserValidations(),
  validate,
  adminController.adminLogin
);

router.get('/show/users', isAdmin, adminController.showAllUsers);

router.delete('/delete/user/:id', isAdmin, adminController.deleteUser);

router.delete('/delete/review/:id', isAdmin, adminController.deleteUserReview);

module.exports = router;
