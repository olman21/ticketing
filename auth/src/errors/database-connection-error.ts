import { CustomError } from './custom-error';
import { CommonError } from './common-error';

export class DatabaseConnectionError extends CustomError {

  reason = 'Error connecting to database';
  statusCode = 500;

  constructor() {
    super("Invalid request parameters");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  getError(): { errors: CommonError[] } {
    const errors = [{ message: this.reason }];
    return { errors };
  }
}