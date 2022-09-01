import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserLogin, IUserRequest } from "../interfaces/users";

export const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

export const loginSchema: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});
