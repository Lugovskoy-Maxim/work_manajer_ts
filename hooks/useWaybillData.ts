import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { fetchWaybillsSuccess } from "@/store/waybills/slice";
import { fetchDriversSuccess } from "@/store/drivers/slice";
import { fetchVehiclesSuccess } from "@/store/vehicles/slice";
import { fetchOrganizationsSuccess } from "@/store/organizations/slice";
import { fetchAddressSuccess } from "@/store/address/slice";
import { fetchUsersSuccess } from "@/store/users/slice";
import mokeWaybill from "@/constants/mokeWaybill";
import mokeDrivers from "@/constants/mokeDrivers";
import { mokeVehicles } from "@/constants/mokeVehicles";
import { mokeOrganizations } from "@/constants/mokeOrganizations";
import mokeAddress from "@/constants/mokeAddress";
import mokeUsers from "@/constants/mokeUsers";

export const useWaybillData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWaybillsSuccess(mokeWaybill));
    dispatch(fetchDriversSuccess(mokeDrivers));
    dispatch(fetchVehiclesSuccess(mokeVehicles));
    dispatch(fetchOrganizationsSuccess(mokeOrganizations));
    dispatch(fetchAddressSuccess(mokeAddress));
    dispatch(fetchUsersSuccess(mokeUsers));
  }, [dispatch]);

  return useSelector((state: RootState) => state.waybills);
};
