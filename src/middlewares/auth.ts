import createError from "http-errors";
import { NextFunction, Response } from "express";
import { verificationAccessToken } from "../utils/auth";
import jwt from "jsonwebtoken";
import { TRequest } from "../types";
import { apiErrorHandler } from "../utils/apiErrorHandler";

export const verificationAccess = async (
  req: TRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw createError(403, "Invalid Access");
    }

    verificationAccessToken(token, async (err, decode) => {
      if (err) {
        return res.status(403).send({
          message: "Token expired!",
        });
      }

      const { email, id } = decode as jwt.JwtPayload;

      req.email = email;
      req.id = id;

      next();
    });
  } catch (error: any) {
    apiErrorHandler(res, error);
  }
};
