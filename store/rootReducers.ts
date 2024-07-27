import { combineReducers } from '@reduxjs/toolkit';
import driversReducer from './drivers/slice';
import organizationsReducer from './organizations/slice';
import vehiclesReducer from './vehicles/slice';
import usersReducer from './users/slice';
import waybillsReducer from './waybills/slice';
import modalContentReducer from './modal/slice';
import addressReducer from './address/slice';

const rootReducer = combineReducers({
  drivers: driversReducer,
  organizations: organizationsReducer,
  vehicles: vehiclesReducer,
  users: usersReducer,
  waybills: waybillsReducer,
  modalContent: modalContentReducer,
  address: addressReducer,
});

export default rootReducer;