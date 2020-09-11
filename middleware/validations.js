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

const gameValidations = () => {
  return [
    check("title", "Title is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
    check("displayPic", "Display Pic is required").not().isEmpty(),
    check("trailerLink", "Trailer Link is required").not().isEmpty(),
    check("category", "Category is required").not().isEmpty(),
    check("platform", "Platform is required").not().isEmpty(),
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
  gameValidations,
  validate,
};
