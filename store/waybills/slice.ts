import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

interface Waybill {
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

interface WaybillState {
  waybills: Waybill[];
  isLoading: boolean;
  error: string | null;
}

const initialState: WaybillState = {
  waybills: [],
  isLoading: false,
  error: null,
};

const WaybillsSlice = createSlice({
  name: 'Waybills',
  initialState,
  reducers: {
    fetchWaybillsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchWaybillsSuccess(state, action: PayloadAction<Waybill[]>) {
      state.isLoading = false;
      state.waybills = action.payload;
    },
    fetchWaybillsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addWaybill(state, action: PayloadAction<Waybill>) {
      state.waybills.push(action.payload);
    },
    removeWaybill(state, action: PayloadAction<string>) {
      state.waybills = state.waybills.filter(waybill => waybill.id !== action.payload);
    },
    updateWaybill(state, action: PayloadAction<Waybill>) {
      const index = state.waybills.findIndex(waybill => waybill.id === action.payload.id);
      if (index !== -1) {
        state.waybills[index] = action.payload;
      }
    },
  },
});

export const { fetchWaybillsStart, fetchWaybillsSuccess, fetchWaybillsFailure } = WaybillsSlice.actions;

export default WaybillsSlice.reducer;
