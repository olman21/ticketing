import { CommonError } from "./common-error";

export abstract class CustomError extends Error {

  abstract statusCode: number;
  abstract getError(): { errors: CommonError[] };

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

