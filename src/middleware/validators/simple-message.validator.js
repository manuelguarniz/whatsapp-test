const { check, validationResult } = require("express-validator");

exports.simpleMessageValidator = [
  check('to')
    .notEmpty()
    .bail(),
  check('text.body')
    .notEmpty()
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
]