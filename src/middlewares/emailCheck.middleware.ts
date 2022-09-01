import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Users } from "../entities/users.entity";

const emailCheckMiddle = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const userData = request.body;
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();

  const isEmailExists = users.find((elem) => elem.email === userData.email);

  if (isEmailExists) {
    return response.status(400).json({ message: "Email already exist" });
  } else {
    next();
  }
};

export default emailCheckMiddle;
