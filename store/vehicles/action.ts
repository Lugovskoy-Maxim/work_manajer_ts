import {
  fetchVehiclesStart,
  fetchVehiclesSuccess,
  fetchVehiclesFailure,
} from "./slice";
import { AppDispatch } from "../store";

export const fetchVehicles = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchVehiclesStart());
    const response = await fetch("api_url"); // Заменить URL API
    const data = await response.json();
    dispatch(fetchVehiclesSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchVehiclesFailure(error.message));
    } else {
      console.error("Произошла неизвестная ошибка:", error);
    }
  }
};
