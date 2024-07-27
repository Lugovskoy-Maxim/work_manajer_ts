import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Address } from "@/types/address";
import { Driver } from "@/types/driver";
import { User } from "@/types/user";
import { Vehicle } from "@/types/vehicle";

export const useFindData = () => {
  const addresses = useSelector((state: RootState) => state.address.address);
  const drivers = useSelector((state: RootState) => state.drivers.drivers);
  const users = useSelector((state: RootState) => state.users.users);
  const vehicles = useSelector((state: RootState) => state.vehicles.vehicles);

  const findAddressById = (addressId: string): Address | undefined => {
    return addresses.find((address) => address.id === addressId);
  };

  const findDriverById = (driverId: string): Driver | undefined => {
    return drivers.find((driver) => driver.id === driverId);
  };

  const findUserById = (userId: string): User | undefined => {
    return users.find((user) => user.id === userId);
  };

  const findVehicleById = (vehicleId: string): Vehicle | undefined => {
    return vehicles.find((vehicle) => vehicle.id === vehicleId);
  };

  return {
    findAddressById,
    findDriverById,
    findUserById,
    findVehicleById,
  };
};
