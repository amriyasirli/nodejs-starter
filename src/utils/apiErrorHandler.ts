import { Response } from 'express';
import { ApiError } from './ApiError';

export const apiErrorHandler = (res: Response, error: unknown) => {
  if (error instanceof ApiError) {
    return res.status(error.status).json({ message: error.message });
  }

  return res.status(500).json({ message: 'Internal Server Error' });
};
