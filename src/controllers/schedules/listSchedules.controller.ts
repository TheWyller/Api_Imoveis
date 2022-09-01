import { Response, Request } from "express";
import listSchedulesServices from "../../services/schedules/listSchedules.services";

const listSchedulesController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;
  const listServicesFromProperties = await listSchedulesServices(id);
  return response.status(200).json(listServicesFromProperties);
};

export default listSchedulesController;
