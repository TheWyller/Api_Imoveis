import { Response, Request } from "express";
import createUserServices from "../../services/users/createUser.services";

const createUserController = async (request: Request, response: Response) => {
  const userData = request.body;
  const newUser = await createUserServices(userData);
  return response.status(201).json(newUser);
};

export default createUserController;
