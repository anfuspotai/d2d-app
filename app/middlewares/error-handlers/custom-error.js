class CustomError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name; // Optionally set the error name for better identification
    Object.setPrototypeOf(this, new.target.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

module.exports = CustomError;
