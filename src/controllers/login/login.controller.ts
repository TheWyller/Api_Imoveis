import { Request, Response } from "express";
import loginServices from "../../services/login/login.services";

const loginController = async (request: Request, response: Response) => {
  const { email, password } = request.body;

  const token = await loginServices({ email, password });

  return response.status(200).json(token);
};

export default loginController;
