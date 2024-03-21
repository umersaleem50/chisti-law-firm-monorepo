class apiError extends Error {
  constructor(message, statusCode) {
    super(message);

    // this.message = message;
    this.statusCode = statusCode;
    this.status = this.statusCode.toString().startsWith('4')
      ? 'failed'
      : 'success';

    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = apiError;
