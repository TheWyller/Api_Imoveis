import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import listAllPropertiesCategoryController from "../controllers/categories/listAllPropertiesCategory.controller";
import listCategoryControllers from "../controllers/categories/listCategory.controller";
import authUserMiddle from "../middlewares/authUser.middleware";
import categoryIdCheckMiddleware from "../middlewares/categoryIdCheck.middleware";
import isAdmCheckMiddleware from "../middlewares/isAdmCheck.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { categorySchema } from "../schemas/category.schemas";

const routes = Router();

routes.post(
  "",
  validationMiddleware(categorySchema),
  authUserMiddle,
  isAdmCheckMiddleware,
  createCategoryController
);
routes.get("", listCategoryControllers);
routes.get(
  "/:id/properties",
  categoryIdCheckMiddleware,
  listAllPropertiesCategoryController
);

export default routes;
