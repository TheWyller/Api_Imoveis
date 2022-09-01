export interface IScheduleRequest {
  userId: string;
  propertyId: string;
  date: string;
  hour: string;
}

export interface ISchedule {
  propertyId: string;
  date: string;
  hour: string;
}
