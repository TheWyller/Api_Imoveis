import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/AppErros";

const listSchedulesServices = async (id: string) => {
  const propertyRepository = AppDataSource.getRepository(Properties);
  const properties = await propertyRepository.find();

  const getAllPropertiesFromSchedules = await propertyRepository.findOne({
    where: {
      id,
    },
    relations: {
      schedules: true,
    },
  });

  if (!getAllPropertiesFromSchedules) {
    throw new AppError("Property not found", 404);
  }

  const schedules = getAllPropertiesFromSchedules.schedules.map((elem) => {
    const obj = {
      date: elem.date,
      hour: elem.hour,
      id: elem.id,
      user: elem.user.id,
    };

    return obj;
  });

  return { schedules };
};

export default listSchedulesServices;
