import { CustomError } from '../errors/custom-error';
import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';



export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Something went wrong", error);

  if (error instanceof CustomError) {
    const parsedError = error.getError();
    return res.status(error.statusCode).send({ errors: parsedError.errors });
  }

  const errors = [{
    message: error.message
  }];

  return res.status(500).send({ errors });
};