const express = require("express");
const {
  registerUserValidations,
  loginUserValidations,
  validate,
} = require("../middleware/userValidation");
const userController = require("../controllers/User");
const router = express.Router();

router.post(
  "/register",
  registerUserValidations(),
  validate,
  userController.register
);

router.post("/login", loginUserValidations(), validate, userController.login);

module.exports = router;
