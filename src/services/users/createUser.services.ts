import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { IUserRequest } from "../../interfaces/users";
import { hash } from "bcryptjs";

const createUserServices = async (userRequest: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();

  const user = new Users();
  user.name = userRequest.name;
  user.email = userRequest.email;
  user.password = await hash(userRequest.password, 10);
  user.isAdm = userRequest.isAdm;

  userRepository.create(user);
  await userRepository.save(user);
  const { password, ...userNoPassword } = user;

  return userNoPassword;
};

export default createUserServices;
