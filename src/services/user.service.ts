import { User } from "../db/models/user";

export const findAll = async (): Promise<User[] | null> => {
  const users = await User.findAll();
  return users;
};
export const findUserById = async (id: string): Promise<User | null> => {
  const user = await User.findByPk(id);
  return user;
};
