const CustomError = require("../middlewares/error-handlers/custom-error");

class InvalidCredentialError extends CustomError {
  constructor(message) {
    super(message, 500); // Pass status code to the super constructor
    this.name = "InvalidCredentialError"; // Optionally set a custom name for the error type
    Object.setPrototypeOf(this, InvalidCredentialError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = InvalidCredentialError;
