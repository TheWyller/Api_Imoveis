import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Categories } from "../entities/categories.entity";

const categoryIdCheckMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { categoryId } = request.body;
  const { id } = request.params;

  let handleId = "";

  id ? (handleId = id) : (handleId = categoryId);

  const categoryRepository = AppDataSource.getRepository(Categories);
  const categories = await categoryRepository.find();

  const isCategoryExists = categories.find((elem) => elem.id === handleId);
  if (!isCategoryExists) {
    return response.status(404).json({ message: "This category not exist" });
  } else {
    next();
  }
};

export default categoryIdCheckMiddleware;
