// backend/src/middleware/error.middleware.ts
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error & { statusCode?: number },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  console.error(err.stack);
  res.status(statusCode).json({
    message: err.message || 'Server Error',
  });
};
