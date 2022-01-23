import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new Error("Token Missing!");

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(token, "NSXZkNB3mhSHfbWz");

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(userId.toString());

    if (!user) throw new Error("User does not exists!");

    next();
  } catch (error) {
    throw new Error("Invalid Token");
  }
}
