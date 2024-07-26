const CustomError = require("../middlewares/error-handlers/custom-error");

class NotFoundError extends CustomError {
  constructor(message) {
    super(message, 404); // Set status code to 404 for not found errors
    this.name = "NotFoundError"; // Set name to distinguish error types if needed
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = NotFoundError;
