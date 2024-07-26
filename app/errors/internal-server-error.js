const CustomError = require("../middlewares/error-handlers/custom-error");

class InternalServerError extends CustomError {
  constructor(message) {
    super(message, 500); // Pass status code to the super constructor
    this.name = "InternalServerError"; // Optionally set a custom name for the error type
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = InternalServerError;
