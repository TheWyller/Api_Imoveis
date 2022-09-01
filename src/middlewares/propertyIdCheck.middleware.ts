import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Properties } from "../entities/properties.entity";
import { Schedules } from "../entities/schedules.entity";
import { IScheduleRequest } from "../interfaces/schedules";

const propertyIdCheckMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { propertyId }: IScheduleRequest = request.body;

  const propertyRepository = AppDataSource.getRepository(Properties);
  const properties = await propertyRepository.find();
  const property = properties.find((elem) => elem.id === propertyId);

  if (!property) {
    return response.status(404).json({ message: "Invalid property id" });
  } else {
    next();
  }
};

export default propertyIdCheckMiddleware;
