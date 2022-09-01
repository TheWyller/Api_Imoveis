import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { Schedules } from "../../entities/schedules.entity";
import { Users } from "../../entities/users.entity";
import { IScheduleRequest } from "../../interfaces/schedules";

const createSchedulesServices = async ({
  date,
  hour,
  propertyId,
  userId,
}: IScheduleRequest) => {
  const usersRepository = AppDataSource.getRepository(Users);
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const scheduleRepository = AppDataSource.getRepository(Schedules);

  const users = await usersRepository.find();
  const properties = await propertiesRepository.find();

  const user = users.find((elem) => elem.id === userId);
  const property = properties.find((elem) => elem.id === propertyId);

  const searchInData = "/";
  const replacerData = new RegExp(searchInData, "g");
  const modDate = date.replace(replacerData, "-");

  const schedule = scheduleRepository.create({
    date: modDate,
    hour,
    property: property,
    user: user,
  });

  await scheduleRepository.save(schedule);

  const modSchedule = {
    date: schedule.date,
    hour: schedule.hour,
    property: schedule.property,
    user: schedule.user.id,
    id: schedule.id,
  };

  return modSchedule;
};

export default createSchedulesServices;
