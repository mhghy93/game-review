const express = require("express");
const {
  registerUserValidations,
  loginUserValidations,
  validate,
} = require("../middleware/validations");
const userController = require("../controllers/User");
const router = express.Router();

router.post(
  "/register",
  registerUserValidations(),
  validate,
  userController.register
);

router.post("/login", loginUserValidations(), validate, userController.login);

router.post(
  "/admin/login",
  loginUserValidations(),
  validate,
  userController.adminLogin
);

module.exports = router;
