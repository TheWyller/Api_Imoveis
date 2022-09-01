import { Response, Request } from "express";
import createCategoryServices from "../../services/categories/createCategory.services";

const createCategoryController = async (
  request: Request,
  response: Response
) => {
  const name = request.body;
  const newCategory = await createCategoryServices(name);
  return response.status(201).json(newCategory);
};

export default createCategoryController;
