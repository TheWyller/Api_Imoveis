import { Router } from "express";
import createSchedulesController from "../controllers/schedules/createSchedules.controller";
import listSchedulesController from "../controllers/schedules/listSchedules.controller";
import alreadyVisitCheckMiddleware from "../middlewares/alreadyVisitCheck.middleware";
import authUserMiddle from "../middlewares/authUser.middleware";
import isAdmCheckMiddleware from "../middlewares/isAdmCheck.middleware";
import propertyIdCheckMiddleware from "../middlewares/propertyIdCheck.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { scheduleSchema } from "../schemas/schedule.schemas";

const routes = Router();

routes.post(
  "",
  validationMiddleware(scheduleSchema),
  authUserMiddle,
  propertyIdCheckMiddleware,
  alreadyVisitCheckMiddleware,
  createSchedulesController
);
routes.get(
  "/properties/:id",
  authUserMiddle,
  isAdmCheckMiddleware,
  listSchedulesController
);

export default routes;
