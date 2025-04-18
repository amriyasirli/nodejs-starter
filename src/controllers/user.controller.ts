import { Response } from "express";
import createError from "http-errors";
import { TRequest } from "../types";
import { findAll, findUserById } from "../services/user.service";
import { apiErrorHandler } from "../utils/apiErrorHandler";

export const getAllUser = async (req: TRequest, res: Response) => {
  try {
    const data = await findAll();
    if (!data) {
      throw createError(404, "User not found!");
    }

    res.status(200).json({
      message: "Data retrieved successfully!",
      data,
    });
  } catch (error) {
    apiErrorHandler(res, error);
  }
};

export const getUserById = async (req: TRequest, res: Response) => {
  const { id } = req.params;

  if (!id) {
    throw createError(400, "Invalid or missing ID parameter!");
  }

  try {
    const data = await findUserById(id);
    if (!data) {
      throw createError(404, "User not found!");
    }

    res.status(200).json({
      message: "Data retrieved successfully!",
      data,
    });
  } catch (error) {
    apiErrorHandler(res, error);
  }
};
