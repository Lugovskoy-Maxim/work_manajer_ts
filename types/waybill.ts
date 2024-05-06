import { Driver } from "./driver";
import { Organization } from "./organization";
import { Vehicle } from "./vehicle";

export type Waybill = {
  id: string;
  waybill_number: string;
  address: string;
  date: string;
  status: string;
  organizations: Organization;
  vehicle: Vehicle;
  drivers: Driver;
  owner: string;
}
