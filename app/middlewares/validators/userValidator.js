const { check } = require("express-validator");
const { runValidation } = require("./runValidation");

exports.registerFormCheck = [
  check("email").not().isEmpty().withMessage("Invalid Credentials"),
  check("password").not().isEmpty().withMessage("Invalid Credentials"),
  runValidation,
];
