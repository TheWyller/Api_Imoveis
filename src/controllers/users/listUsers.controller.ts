import { Response, Request } from "express";
import listUserService from "../../services/users/listUsers.services";

const listUserControllers = async (request: Request, response: Response) => {
  const listUsers = await listUserService();
  return response.json(listUsers);
};

export default listUserControllers;
