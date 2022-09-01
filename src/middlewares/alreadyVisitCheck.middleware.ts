import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Properties } from "../entities/properties.entity";
import { IScheduleRequest } from "../interfaces/schedules";

const alreadyVisitCheckMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { date, hour, propertyId }: IScheduleRequest = request.body;

  if (new Date(date).getDay() === 0 || new Date(date).getDay() === 6) {
    return response
      .status(400)
      .json({ message: "This is not a commecial Day" });
  }

  if (
    new Date().setHours(Number(hour.split(":")[0])) <
      new Date().setHours(8, 0) ||
    new Date().setHours(Number(hour.split(":")[0])) >=
      new Date().setHours(18, 0)
  ) {
    return response
      .status(400)
      .json({ message: "This is not a commecial hour" });
  }
  const searchInData = "/";
  const replacerData = new RegExp(searchInData, "g");
  const modDate = date.replace(replacerData, "-");

  const propertyRepository = AppDataSource.getRepository(Properties);
  const properties = await propertyRepository.find();

  const getAllPropertiesFromSchedules = await propertyRepository.findOne({
    where: {
      id: propertyId,
    },
    relations: {
      schedules: true,
    },
  });

  const arraySchedules = getAllPropertiesFromSchedules?.schedules;

  const schedulesExists = arraySchedules?.find(
    (elem) => elem.date.toString() === new Date(modDate).toString()
  );

  if (schedulesExists) {
    return response.status(400).json({ message: "This Day was taked" });
  } else {
    next();
  }
};

export default alreadyVisitCheckMiddleware;
