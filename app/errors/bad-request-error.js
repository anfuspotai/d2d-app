const CustomError = require("../middlewares/error-handlers/custom-error");

class BadRequestError extends CustomError {
  constructor(message) {
    super(message, 400);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = BadRequestError;
