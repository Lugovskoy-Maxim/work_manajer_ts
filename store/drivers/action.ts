import {
  fetchDriversStart,
  fetchDriversSuccess,
  fetchDriversFailure,
} from "./slice";
import { AppDispatch } from "../store";

export const fetchDrivers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchDriversStart());
    const response = await fetch("api_url"); // Заменить URL API
    const data = await response.json();
    dispatch(fetchDriversSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchDriversFailure(error.message));
    } else {
      console.error("Произошла неизвестная ошибка:", error);
    }
  }
};
