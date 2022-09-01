import { Response, Request } from "express";
import listCategoryServices from "../../services/categories/listCategory.services";

const listCategoryControllers = async (
  request: Request,
  response: Response
) => {
  const listCategory = await listCategoryServices();
  return response.json(listCategory);
};

export default listCategoryControllers;
