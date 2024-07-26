const CustomError = require("../middlewares/error-handlers/custom-error");

class DatabaseConnectionError extends CustomError {
  constructor(message) {
    super(message, 500);
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = DatabaseConnectionError;
