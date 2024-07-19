import { Driver } from "./driver";
import { Organization } from "./organization";

export type Vehicle = {
  id: string; // Идентификатор 
  name: string; // Название
  type: string; // тип автомобиля
  brand: string; // марка авто
  reg_number: string;
  organizations?: string; // организации
  sts_date?: string;
  sts_number?: string;
  body_volume?: number; // объем кузова
  fuel?: number;
  glonass_url?: string;
  glonass_login?: string;
  glonass_password?: string;
  drivers?: string; // Водители
  owner: string;
}