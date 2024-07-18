"use client"
import React, { useState } from "react";
import styles from "./waybillRow.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Waybill } from "@/types/waybill";
import { Driver } from "@/types/driver";
import { Address } from "@/types/address";
import { User } from "@/types/user";
import { Vehicle } from "@/types/vehicle";
import { openModal } from "../../store/modal/slice";

type WaybillRowProps = {
  waybill: Waybill;
  columnWidths: { [key in keyof typeof styles]?: number };
};

const WaybillRow: React.FC<WaybillRowProps> = ({ waybill, columnWidths }) => {
  const dispatch = useDispatch();

  // Fetching address, driver, user, and vehicle data from Redux store
  const addresses = useSelector((state: RootState) => state.address.address);
  const drivers = useSelector((state: RootState) => state.drivers.drivers);
  const users = useSelector((state: RootState) => state.users.users);
  const vehicles = useSelector((state: RootState) => state.vehicles.vehicles);

  // Function to find address by ID
  const findAddressById = (addressId: string): Address | undefined => {
    return addresses.find((address) => address.id === addressId);
  };

  // Function to find driver by ID
  const findDriverById = (driverId: string): Driver | undefined => {
    return drivers.find((driver) => driver.id === driverId);
  };

  // Function to find user by ID
  const findUserById = (userId: string): User | undefined => {
    return users.find((user) => user.id === userId);
  };

  // Function to find vehicle by ID
  const findVehicleById = (vehicleId: string): Vehicle | undefined => {
    return vehicles.find((vehicle) => vehicle.id === vehicleId);
  };

  // Handling open modal action
  const handleOpenModal = (
    id: string,
    type:
      | ""
      | "waybill"
      | "vehicle"
      | "driver"
      | "organizations"
      | "user"
      | "address"
      | "owner"
  ) => {
    dispatch(openModal({ id, type }));
  };

  // Functions to get names or numbers based on the retrieved data
  const getAddressName = (addressData: Address | undefined): string => {
    if (!addressData) return "Ошибка.";
    return addressData.name
      ? addressData.name
      : `${addressData.street} ${addressData.buildingNumber || ""}`;
  };

  const getDriverName = (driverData: Driver | undefined): string => {
    if (!driverData) return "Ошибка.";
    return `${driverData.firstName} ${driverData.lastName}`;
  };

  const getUserName = (userData: User | undefined): string => {
    if (!userData) return "Ошибка.";
    return `${userData.firstName} ${userData.lastName}`;
  };

  const getVehicleNumber = (vehicleData: Vehicle | undefined): string => {
    if (!vehicleData) return "Ошибка";
    return vehicleData.reg_number;
  };

  const [isChecked, setIsChecked] = useState(false);

  return (
    <li className={styles.item}>
      <label className={styles.check}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
      </label>

      <button className={styles.slider}>
        <Image src="/icons/arrow_right_icon.svg" alt="" width={16} height={16} />
      </button>

      <div
        className={
          waybill.address ? styles.address : `${styles.address} ${styles.not_found}`
        }
        style={{ width: columnWidths.address }}
        onClick={() =>
          waybill.address && handleOpenModal(waybill.address, "address")
        }
      >
        <p>{getAddressName(findAddressById(waybill.address))}</p>
      </div>

      <div
        className={styles.title}
        style={{ width: columnWidths.name}}
        onClick={() => handleOpenModal(waybill.id, "waybill")}
      >
        <p>{`Путевой лист ТСПЛ-${waybill.waybill_number}`}</p>
      </div>

      <div
        className={`${styles.status} ${
          waybill.status === "Открыт" ? styles.opened : styles.closed
        }`}
        style={{ width: columnWidths.status }}
      >
        <div
          className={`${styles.dot} ${
            waybill.status === "Открыт" ? styles.green : styles.blue
          }`}
        ></div>
        <p>{waybill.status}</p>
      </div>

      <div className={styles.date} style={{ width: columnWidths.date }}>
        <Image
          src="/icons/date_list_icon.svg"
          alt=""
          width={16}
          height={16}
        />
        <p>{waybill.date}</p>
      </div>

      <div className={styles.flight} style={{ width: columnWidths.flight}}>
        <div>
          <p>{waybill.flights || 0}</p>
        </div>
      </div>

      <div className={waybill.drivers ? styles.driver : `${styles.driver} ${styles.not_found}`}
        style={{ width: columnWidths.driver }}
        onClick={() =>
          waybill.drivers && handleOpenModal(waybill.drivers, "driver")
        }
      >
        <p>{getDriverName(findDriverById(waybill.drivers))}</p>
      </div>

      <div
        className={
          waybill.vehicle ? styles.vehicle : `${styles.vehicle} ${styles.not_found}`
        }
        style={{ width: columnWidths.vehicle}}
        onClick={() =>
          waybill.vehicle && handleOpenModal(waybill.vehicle, "vehicle")
        }
      >
        <p>{getVehicleNumber(findVehicleById(waybill.vehicle))}</p>
      </div>

      <div
        className={
          waybill.owner ? styles.owner : `${styles.owner} ${styles.not_found}`
        }
        style={{ width: columnWidths.owner}}
        onClick={() => waybill.owner && handleOpenModal(waybill.owner, "owner")}
      >
        <p>{getUserName(findUserById(waybill.owner))}</p>
      </div>
    </li>
  );
};

export default WaybillRow;
