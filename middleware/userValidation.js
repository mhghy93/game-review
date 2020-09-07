const { check, validationResult } = require("express-validator");

const registerUserValidations = () => {
  return [
    check("firstname", "First Name is required").not().isEmpty(),
    check("lastname", "Last Name is required").not().isEmpty(),
    check("username", "username is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "password length must be atleast 6").isLength({ min: 6 }),
  ];
};

const loginUserValidations = () => {
  return [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ errors: errors.array() });
};

module.exports = {
  registerUserValidations,
  loginUserValidations,
  validate,
};
