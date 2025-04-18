import { Model, DataTypes, Optional, Sequelize } from "sequelize";
import { UserAttributes } from "../../types/user.type";
import { generateUserId } from "../../utils/generateId";

type UserCreationAttributes = Optional<
  UserAttributes,
  "id" | "createdAt" | "updatedAt" | "deletedAt"
>;

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: string;
  public email!: string;
  public username!: string;
  public firstName?: string;
  public lastName?: string;
  public imageURL!: string;
  public role!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;

  static initModel(sequelize: Sequelize): typeof User {
    User.init(
      {
        id: {
          type: DataTypes.CHAR(16),
          primaryKey: true,
          allowNull: false,
          defaultValue: generateUserId(),
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        imageURL: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        role: {
          type: DataTypes.ENUM("admin", "user"),
          allowNull: false,
          defaultValue: "user",
        },
      },
      {
        sequelize,
        paranoid: true,
        deletedAt: true,
        timestamps: true,
        underscored: false,
      }
    );

    return User;
  }
}
