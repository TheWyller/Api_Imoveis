import { Response, Request } from "express";
import createSchedulesServices from "../../services/schedules/createSchedules.services";

const createSchedulesController = async (
  request: Request,
  response: Response
) => {
  const { id: userId } = request.user;
  const { date, hour, propertyId } = request.body;
  const newSchedule = await createSchedulesServices({
    date,
    hour,
    propertyId,
    userId,
  });
  return response
    .status(201)
    .json({ message: "Schedules Created", newSchedule: newSchedule });
};

export default createSchedulesController;
