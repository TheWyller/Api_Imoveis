import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Users } from "../entities/users.entity";

const isAdmCheckMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const userData = request.user;
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();

  const user = users.find((elem) => elem.id === userData.id);
  if (user === undefined) {
    throw new Error();
  }

  if (!user.isAdm) {
    return response.status(403).json({ message: "You are not a Adm" });
  } else {
    next();
  }
};

export default isAdmCheckMiddleware;
