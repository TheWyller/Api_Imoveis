import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";

const deleteUserServices = async (id: string) => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = await userRepository.find();

  const account = users.find((elem) => elem.id === id);

  await userRepository.update(account!.id, { isActive: false });

  return { message: "Account removed" };
};

export default deleteUserServices;
