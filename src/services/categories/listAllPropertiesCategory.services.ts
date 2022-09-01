import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";

const listAllPropertiesCategoryServices = async (id: string) => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const getAllPropertiesFromCategories = await categoriesRepository.findOne({
    where: {
      id,
    },
    relations: {
      property: true,
    },
  });

  const properties = getAllPropertiesFromCategories?.property.map((elem) => {
    const obj = {
      id: elem.id,
    };
    return obj;
  });

  return {
    id: getAllPropertiesFromCategories?.id,
    name: getAllPropertiesFromCategories?.name,
    properties: properties,
  };
};

export default listAllPropertiesCategoryServices;
