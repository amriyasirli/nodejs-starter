import { nanoid } from 'nanoid';

export const generateUserId = () => `user_${nanoid(10)}`;
