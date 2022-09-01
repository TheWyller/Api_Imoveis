import { Router } from "express";
import loginController from "../controllers/login/login.controller";
import isDeletedCheckMiddleware from "../middlewares/isDeletedCheck.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { loginSchema } from "../schemas/users.schemas";

const routes = Router();

routes.post(
  "",
  validationMiddleware(loginSchema),
  isDeletedCheckMiddleware,
  loginController
);

export default routes;
