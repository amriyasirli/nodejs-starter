import { Request } from 'express';

export interface TRequest extends Request {
  email?: string;
  id?: string;
}
