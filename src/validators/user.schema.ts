import { z } from 'zod';

export const userCreateSchema = z.object({
  username: z.string().min(3, 'Username harus lebih dari 3 karakter'),
  email: z.string().email('Email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
});

export const userUpdateSchema = z.object({
  username: z.string().optional(),
  email: z.string().email('Email tidak valid').optional(),
  password: z.string().min(6, 'Password minimal 6 karakter').optional(),
});

export type UserCreateInput = z.infer<typeof userCreateSchema>;
export type UserUpdateInput = z.infer<typeof userUpdateSchema>;
