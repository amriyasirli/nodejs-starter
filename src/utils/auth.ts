import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verificationAccessToken = (
  token: string,
  callback: jwt.VerifyCallback
) => {
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_KEY!,
    { algorithms: ["HS256"] },
    callback
  );
};
