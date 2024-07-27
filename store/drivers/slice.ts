import { Driver } from '@/types/driver';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DriversState = {
  drivers: Driver[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DriversState = {
  drivers: [],
  isLoading: false,
  error: null,
};

const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    fetchDriversStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchDriversSuccess(state, action: PayloadAction<Driver[]>) {
      state.isLoading = false;
      state.drivers = action.payload;
    },
    fetchDriversFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addDriver(state, action: PayloadAction<Driver>) {
      state.drivers.push(action.payload);
    },
    removeDriver(state, action: PayloadAction<string>) {
      state.drivers = state.drivers.filter(driver => driver.id !== action.payload);
    },
    updateDriver(state, action: PayloadAction<Driver>) {
      const index = state.drivers.findIndex(driver => driver.id === action.payload.id);
      if (index !== -1) {
        state.drivers[index] = action.payload;
      }
    },
  },
});

export const { fetchDriversStart, fetchDriversSuccess, fetchDriversFailure } = driversSlice.actions;

export default driversSlice.reducer;
