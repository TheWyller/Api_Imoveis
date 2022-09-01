import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Users } from "../entities/users.entity";

const isDeletedCheckMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { email } = request.body;
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();

  const user = users.find((elem) => elem.email === email);
  if (user === undefined) {
    return response.status(400).json({ message: " This email not exist" });
  }

  if (!user.isActive) {
    return response.status(403).json({ message: "Your Account was deleted" });
  } else {
    next();
  }
};

export default isDeletedCheckMiddleware;
