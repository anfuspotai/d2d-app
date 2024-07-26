const CustomError = require("../middlewares/error-handlers/custom-error");

class RequestValidationError extends CustomError {
  constructor(errors) {
    super("Invalid request parameters", 400);
    this.errors = errors;
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => ({
      message: err.msg,
      field: err.param,
    }));
  }
}

module.exports = RequestValidationError;
