import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { Addresses } from "../entities/addresses.entity";

const addressCheckMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { zipCode, number } = request.body.address;
  const addressRepository = AppDataSource.getRepository(Addresses);
  const addresses = await addressRepository.find();

  const isAddressExists = addresses.find(
    (elem) => elem.zipCode === zipCode && elem.number === number
  );

  if (isAddressExists) {
    return response.status(400).json({ message: "This address already exist" });
  } else {
    next();
  }
};

export default addressCheckMiddleware;
