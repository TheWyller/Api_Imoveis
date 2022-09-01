import * as yup from "yup";
import { SchemaOf } from "yup";
import { ISchedule } from "../interfaces/schedules";

export const scheduleSchema: SchemaOf<ISchedule> = yup.object().shape({
  propertyId: yup.string().required(),
  date: yup.string().required(),
  hour: yup.string().required(),
});
