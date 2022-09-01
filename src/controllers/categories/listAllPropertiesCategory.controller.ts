import { Response, Request } from "express";
import listAllPropertiesCategoryServices from "../../services/categories/listAllPropertiesCategory.services";

const listAllPropertiesCategoryController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;
  const listCategory = await listAllPropertiesCategoryServices(id);
  return response.json(listCategory);
};

export default listAllPropertiesCategoryController;
