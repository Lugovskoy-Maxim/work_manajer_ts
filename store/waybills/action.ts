import {
  fetchWaybillsStart,
  fetchWaybillsSuccess,
  fetchWaybillsFailure,
} from "./slice";
import { AppDispatch } from "../store";

export const fetchVehicles = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchWaybillsStart());
    const response = await fetch("api_url"); // Заменить URL API
    const data = await response.json();
    dispatch(fetchWaybillsSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchWaybillsFailure(error.message));
    } else {
      console.error("Произошла неизвестная ошибка:", error);
    }
  }
};
