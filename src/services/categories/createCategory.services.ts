import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/AppErros";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryServices = async (categoryRequest: ICategoryRequest) => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const categories = await categoryRepository.find();

  const categoryExists = categories.find(
    (elem) => elem.name === categoryRequest.name
  );

  if (categoryExists) {
    throw new AppError("This category already exist");
  }

  const category = new Categories();
  category.name = categoryRequest.name;

  categoryRepository.create(category);
  await categoryRepository.save(category);

  return category;
};

export default createCategoryServices;
