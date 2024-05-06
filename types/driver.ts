import { Organization } from "./organization";

export type Driver = {
  id: string; 
  name: string; 
  firstName: string; 
  lastName: string; 
  middleName: string; 
  licenseNumber: string; 
  licenseDate: string; 
  organizations: Organization; 
  birthDay: string; 
  owner: string;
  working_shift: number;
}