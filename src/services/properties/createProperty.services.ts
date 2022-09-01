import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/AppErros";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertyServices = async ({
  value,
  size,
  address,
  categoryId,
}: IPropertyRequest) => {
  const propertyRepository = AppDataSource.getRepository(Properties);
  const addressRepository = AppDataSource.getRepository(Addresses);
  const categoryRepository = AppDataSource.getRepository(Categories);
  const categories = await categoryRepository.find();

  const category = categories.find((elem) => elem.id === categoryId);

  if (!category) {
    throw new AppError("invalid category", 409);
  }

  const addresses = addressRepository.create({
    district: address.district,
    zipCode: address.zipCode,
    number: address.number,
    city: address.city,
    state: address.state,
  });
  await addressRepository.save(addresses);
  const allAddress = await addressRepository.find();
  const addressId = allAddress.find((elem) => elem.id === addresses.id);

  const property = propertyRepository.create({
    value,
    size,
    address: addressId,
    category: category,
  });
  await propertyRepository.save(property);

  return property;
};

export default createPropertyServices;
