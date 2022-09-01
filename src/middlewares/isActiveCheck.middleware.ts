import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Users } from "../entities/users.entity";

const isActiveCheckMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.params;
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();

  const user = users.find((elem) => elem.id === id);
  if (user === undefined) {
    return response.status(404).json({ message: "Id Invalid" });
  }

  if (!user.isActive) {
    return response
      .status(400)
      .json({ message: "You Can't delete this user, he already deleted" });
  } else {
    next();
  }
};

export default isActiveCheckMiddleware;
