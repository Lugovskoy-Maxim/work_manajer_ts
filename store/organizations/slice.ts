import { Organization } from "@/types/organization";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrganizationsState {
  organizations: Organization[];
  isLoading: boolean;
  error: string | null;
}

const initialState: OrganizationsState = {
  organizations: [],
  isLoading: false,
  error: null,
};

const OrganizationsSlice = createSlice({
  name: "organizations",
  initialState,
  reducers: {
    fetchOrganizationsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchOrganizationsSuccess(state, action: PayloadAction<Organization[]>) {
      state.isLoading = false;
      state.organizations = action.payload;
    },
    fetchOrganizationsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addOrganization(state, action: PayloadAction<Organization>) {
      state.organizations.push(action.payload);
    },
    removeOrganization(state, action: PayloadAction<string>) {
      state.organizations = state.organizations.filter(
        (organization) => organization.id !== action.payload
      );
    },
    updateOrganization(state, action: PayloadAction<Organization>) {
      const index = state.organizations.findIndex(
        (organization) => organization.id === action.payload.id
      );
      if (index !== -1) {
        state.organizations[index] = action.payload;
      }
    },
    // Другие редьюсеры
  },
});

export const {
  fetchOrganizationsStart,
  fetchOrganizationsSuccess,
  fetchOrganizationsFailure,
} = OrganizationsSlice.actions;

export default OrganizationsSlice.reducer;
