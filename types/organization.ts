import { Driver } from "./driver";
import { Vehicle } from "./vehicle";

export type Organization = {
  id: string; // Идентификатор
  name: string; // Название
  inn: string; // ИНН
  drivers: string[]; // Водители
  vehicles: string[]; // Техника
  owner: string; // Владелец
};