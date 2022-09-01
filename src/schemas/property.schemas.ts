import * as yup from "yup";
import { SchemaOf } from "yup";

import { IPropertyRequest } from "../interfaces/properties";

export const propertySchema: SchemaOf<IPropertyRequest> = yup.object().shape({
  value: yup.number().required(),
  size: yup.number().required(),
  categoryId: yup.string().required(),
  address: yup.object().shape({
    district: yup.string().required(),
    zipCode: yup.string().required(),
    number: yup.string(),
    city: yup.string().required(),
    state: yup.string().required(),
  }),
});
