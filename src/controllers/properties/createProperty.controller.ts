import { Response, Request } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import createPropertyServices from "../../services/properties/createProperty.services";

const createPropertyController = async (
  request: Request,
  response: Response
) => {
  const { value, size, address, categoryId }: IPropertyRequest = request.body;

  if (address.state.length > 2) {
    return response.status(400).json({ message: "Invalid State" });
  }
  if (address.zipCode.length > 8) {
    return response.status(400).json({ message: "Invalid zipCode" });
  }
  const newCategory = await createPropertyServices({
    value,
    size,
    address,
    categoryId,
  });
  return response.status(201).json(newCategory);
};

export default createPropertyController;
