import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Driver {
  id: string;
  name: string;
}


interface Organization {
  id: string; 
  name: string;
}

interface Vehicle {
  id: string; // Идентификатор 
  name: string; // Название
  type: string; // тип автомобиля
  brand: string; // марка авто
  reg_number: string;
  organizations: Organization[]; // организации
  sts_date: string;
  sts_number: string;
  body_volume: number; // объем кузова
  glonass_url: string;
  glonass_login: string;
  glonass_password: string;
  drivers: Driver[]; // Водители
  owner: string;
}

interface VehiclesState {
  vehicles: Vehicle[];
  isLoading: boolean;
  error: string | null;
}

const initialState: VehiclesState = {
  vehicles: [],
  isLoading: false,
  error: null,
};

const VehiclesSlice = createSlice({
  name: 'Vehicles',
  initialState,
  reducers: {
    fetchVehiclesStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchVehiclesSuccess(state, action: PayloadAction<Vehicle[]>) {
      state.isLoading = false;
      state.vehicles = action.payload;
    },
    fetchVehiclesFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addVehicle(state, action: PayloadAction<Vehicle>) {
      state.vehicles.push(action.payload);
    },
    removeVehicle(state, action: PayloadAction<string>) {
      state.vehicles = state.vehicles.filter(vehicles => vehicles.id !== action.payload);
    },
    updateVehicle(state, action: PayloadAction<Vehicle>) {
      const index = state.vehicles.findIndex(vehicles => vehicles.id === action.payload.id);
      if (index !== -1) {
        state.vehicles[index] = action.payload;
      }
    },
  },
});

export const { fetchVehiclesStart, fetchVehiclesSuccess, fetchVehiclesFailure } = VehiclesSlice.actions;

export default VehiclesSlice.reducer;
