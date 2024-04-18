import {
  fetchOrganizationsStart,
  fetchOrganizationsSuccess,
  fetchOrganizationsFailure,
} from "./slice";
import { AppDispatch } from "../store";

export const fetchOrganizations = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchOrganizationsStart());
    const response = await fetch("api_url"); // Заменить URL API
    const data = await response.json();
    dispatch(fetchOrganizationsSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchOrganizationsFailure(error.message));
    } else {
      console.error("Произошла неизвестная ошибка:", error);
    }
  }
};
