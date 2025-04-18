export interface UserAttributes {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  username: string;
  imageURL?: string;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
