const express = require("express");
const {
  registerUserValidations,
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

router.post("/login", userController.login);

module.exports = router;
