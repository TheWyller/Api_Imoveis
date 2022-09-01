import { Request, Response } from "express";
import deleteUserServices from "../../services/users/deleteUser.services";

const deleteUserController = async (request: Request, response: Response) => {
  const id = request.params.id;
  const user = await deleteUserServices(id);
  return response.status(204).json(user);
};

export default deleteUserController;
