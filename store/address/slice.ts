import { Address } from '@/types/address';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AddressState {
  address: Address[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AddressState = {
  address: [],
  isLoading: false,
  error: null,
};

const AddressSlice = createSlice({
  name: 'Address',
  initialState,
  reducers: {
    fetchAddressStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchAddressSuccess(state, action: PayloadAction<Address[]>) {
      state.isLoading = false;
      state.address = action.payload;
    },
    fetchAddressFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addVehicle(state, action: PayloadAction<Address>) {
      state.address.push(action.payload);
    },
    removeVehicle(state, action: PayloadAction<string>) {
      state.address = state.address.filter(Address => Address.id !== action.payload);
    },
    updateVehicle(state, action: PayloadAction<Address>) {
      const index = state.address.findIndex(Address => Address.id === action.payload.id);
      if (index !== -1) {
        state.address[index] = action.payload;
      }
    },
  },
});

export const { fetchAddressStart, fetchAddressSuccess, fetchAddressFailure } = AddressSlice.actions;

export default AddressSlice.reducer;
