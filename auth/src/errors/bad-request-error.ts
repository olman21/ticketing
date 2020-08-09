import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
import { CommonError } from './common-error';

export class BadRequestError extends CustomError {
  statusCode = 400;
  constructor(private error: string) {
    super("Bad Request Error");
    //needed because we are inheriting a js built-in type
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  getError(): { errors: CommonError[] } {
    const errors = [{ message: this.error }];
    return { errors };
  }
}