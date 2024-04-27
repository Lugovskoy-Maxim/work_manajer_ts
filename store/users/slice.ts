import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string; // Идентификатор 
  first_name: string; // Имя
  last_mane: string; // Фамилия
  object: string; // Объект на котором 
  email: string; // марка авто
}

interface UsersState {
  users: User[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: null,
};

const UsersSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.isLoading = false;
      state.users = action.payload;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    removeUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter(users => users.id !== action.payload);
    },
    updateUser(state, action: PayloadAction<User>) {
      const index = state.users.findIndex(users => users.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } = UsersSlice.actions;

export default UsersSlice.reducer;
