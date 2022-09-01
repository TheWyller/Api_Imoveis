import { Response, Request } from "express";
import listPropertiesService from "../../services/properties/listProperty.services";

const listPropertiesController = async (
  request: Request,
  response: Response
) => {
  const listProperties = await listPropertiesService();
  return response.json(listProperties);
};

export default listPropertiesController;
