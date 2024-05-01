interface Driver {
  id: string;
  name: string;
  working_shift: number;
}

interface Organization {
  id: string;
  name: string;
}

interface Vehicle {
  id: string;
  reg_number: string;
  type: string;
  brand: string;
  body_value: number;
  fuel: number;
}

export interface Waybill {
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

export interface WaybillDataProps {
  waybill: {
    id: string; 
    waybill_number: string; 
    address: string; 
    date: string; 
    status: string;
    organizations: Organization;
    vehicle: Vehicle;
    drivers: Driver;
    owner: string;
  };
}