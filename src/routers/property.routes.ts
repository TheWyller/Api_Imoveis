import { Router } from "express";
import createPropertyController from "../controllers/properties/createProperty.controller";
import listPropertiesController from "../controllers/properties/listProperty.controller";
import isAdmCheckMiddleware from "../middlewares/isAdmCheck.middleware";
import authUserMiddle from "../middlewares/authUser.middleware";
import categoryIdCheckMiddleware from "../middlewares/categoryIdCheck.middleware";
import addressCheckMiddleware from "../middlewares/addressCheck.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { propertySchema } from "../schemas/property.schemas";

const routes = Router();

routes.post(
  "",
  validationMiddleware(propertySchema),
  authUserMiddle,
  isAdmCheckMiddleware,
  addressCheckMiddleware,
  categoryIdCheckMiddleware,
  createPropertyController
);
routes.get("", listPropertiesController);

export default routes;
