const CustomError = require("../middlewares/error-handlers/custom-error");

class NotAuthorizedError extends CustomError {
  constructor(message) {
    super(message, 401); // Pass status code to the super constructor
    this.name = "NotAuthorizedError"; // Optionally set a custom name for the error type
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = NotAuthorizedError;
