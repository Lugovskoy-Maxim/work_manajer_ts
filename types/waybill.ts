export type Waybill = {
  id: string;
  waybill_number: string;
  address: string;
  date: string;
  status: string;
  organizations: string;
  vehicle: string;
  drivers: string;
  working_shift?: number;
  owner: string;
}
