import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalContentState {
  id: string;
  type:
    | "waybill"
    | "driver"
    | "vehicle"
    | "organizations"
    | "user"
    | "address"
    | "owner"
    | "";
  isOpen: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: ModalContentState = {
  id: "",
  type: "",
  isOpen: false,
  isLoading: false,
  error: null,
};

const ModalContentSlice = createSlice({
  name: "modalContent",
  initialState,
  reducers: {
    openModal(
      state,
      action: PayloadAction<{ id: string; type: ModalContentState["type"] }>
    ) {
      const { id, type } = action.payload;
      state.id = id;
      state.type = type;
      state.isOpen = true;
      state.isLoading = true;
      state.error = null;
    },
    closeModal(state) {
      state.id = "";
      state.type = "";
      state.isOpen = false;
      state.isLoading = false;
      state.error = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { openModal, closeModal, setLoading, setError } =
  ModalContentSlice.actions;

export default ModalContentSlice.reducer;
