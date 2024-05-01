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
  id: string; // Идентификатор 
  waybill_number: string; // Название
  address: string; // адрес
  date: string; // дата
  status: string;
  organizations: Organization; // организации
  vehicle: Vehicle;
  drivers: Driver; // Водители
  owner: string;
}

export interface WaybillProps {
  waybill: {
    id: string; // Идентификатор
    waybill_number: string; // Название
    address: string; // адрес
    date: string; // дата
    status: string;
    organizations: Organization; // организации
    vehicle: Vehicle;
    drivers: Driver; // Водители
    owner: string;
  };
}