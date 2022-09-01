import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUserControllers from "../controllers/users/listUsers.controller";
import authUserMiddle from "../middlewares/authUser.middleware";
import emailCheckMiddle from "../middlewares/emailCheck.middleware";
import isActiveCheckMiddleware from "../middlewares/isActiveCheck.middleware";
import isAdmCheckMiddleware from "../middlewares/isAdmCheck.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { userSchema } from "../schemas/users.schemas";

const routes = Router();

routes.post(
  "",
  validationMiddleware(userSchema),
  emailCheckMiddle,
  createUserController
);
routes.get("", authUserMiddle, isAdmCheckMiddleware, listUserControllers);
routes.delete(
  "/:id",
  authUserMiddle,
  isAdmCheckMiddleware,
  isActiveCheckMiddleware,
  deleteUserController
);

export default routes;
