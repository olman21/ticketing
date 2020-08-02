import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
import { CommonError } from './common-error';

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super("Error connecting db");
    //needed because we are inheriting a js built-in type
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  getError(): { errors: CommonError[] } {
    const errors = this.errors.map(e => ({ message: e.msg, field: e.param }));
    return { errors };
  }
}