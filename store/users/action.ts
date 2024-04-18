import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./slice";
import { AppDispatch } from "../store";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchUsersStart());
    const response = await fetch("api_url"); // Заменить URL API
    const data = await response.json();
    dispatch(fetchUsersSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(fetchUsersFailure(error.message));
    } else {
      console.error("Произошла неизвестная ошибка:", error);
    }
  }
};
