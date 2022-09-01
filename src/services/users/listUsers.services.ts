import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";

const listUserService = async () => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = await userRepository.find();

  const newArray = users.map((elem) => {
    const { password, ...allInfos } = elem;
    return allInfos;
  });

  return newArray;
};

export default listUserService;
