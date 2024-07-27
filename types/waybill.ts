export type Waybill = {
  id: string;
  waybill_number: string;
  address: string;
  date: string;
  status: string;
  organizations: string;
  vehicle: string;
  drivers: string;
  flights?: number;
  working_shift?: number;
  fuel?: number;
  speedometer_readings_start?: number; 
  speedometer_readings_end?: number; 
  owner: string;
}
