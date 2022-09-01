import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/AppErros";
import { IUserLogin } from "../../interfaces/users";

const loginServices = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();

  const account = users.find((elem) => elem.email === email);

  if (!account) {
    throw new AppError("Invalid email or password", 403);
  }

  if (!(await compare(password, account.password))) {
    throw new AppError("Invalid email or password", 403);
  }

  const token = jwt.sign(
    { isAdm: account.isAdm },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: account.id,
    }
  );

  return { token: token };
};

export default loginServices;
