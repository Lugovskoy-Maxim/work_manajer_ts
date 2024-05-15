import styles from "./waybillRow.module.scss";
import Image from "next/image";
import edit from "../../public/icons/edit.svg";
import trash from "../../public/icons/trash.svg";
import { openModal } from "../../store/modal/slice";
import { useDispatch, useSelector } from "react-redux";

import { Waybill } from "@/types/waybill";
import { RootState } from "@/store/store";
import { Driver } from "@/types/driver";
import { Address } from "@/types/address";
import { User } from "@/types/user";
import { Vehicle } from "@/types/vehicle";

type WaybillDataProps = {
  waybill: Waybill;
};

const WaybillRow: React.FC<WaybillDataProps> = ({ waybill }) => {
  const dispatch = useDispatch();
  const data = waybill;
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

  // ADDRESS
  const address = useSelector((state: RootState) => state.address.address);
  const findAddressById = (addressId: string): Address | undefined => {
    return address.find((address) => address.id === addressId);
  };
  const addressForHTML = findAddressById(data.address);
  const addressName = addressForHTML
    ? `${
        addressForHTML.name
          ? addressForHTML.name
          : `${addressForHTML.street} ${
              addressForHTML.buildingNumber ? addressForHTML.buildingNumber : ""
            }`
      }`
    : "Адрес не найден";
  //

  // DRIVER
  const drivers = useSelector((state: RootState) => state.drivers.drivers);
  const findDriverById = (driverId: string): Driver | undefined => {
    return drivers.find((driver) => driver.id === driverId);
  };
  const driver = findDriverById(data.drivers);
  const driverName = driver
    ? `${driver.firstName} ${driver.lastName}`
    : "Водитель не найден";
  //

  // OWNER
  const users = useSelector((state: RootState) => state.users.users);
  const findUserById = (userId: string): User | undefined => {
    return users.find((user) => user.id === userId);
  };
  const user = findUserById(data.owner);
  const userName = user
    ? `${user.firstName} ${user.lastName}`
    : "Пользователь не найден";
  //

    // OWNER
    const vehicles = useSelector((state: RootState) => state.vehicles.vehicles);
    const findVehicleById = (vehicleId: string): Vehicle | undefined => {
      return vehicles.find((vehicle) => vehicle.id === vehicleId);
    };
    const vehicle = findVehicleById(data.vehicle);
    // const userName = user
    //   ? `${user.firstName} ${user.lastName}`
    //   : "Пользователь не найден";
    //

  return (
    <li className={styles.item}>
      <div className={styles.check}>
        <input type="checkbox" className={styles.checkbox}></input>
      </div>

      <div
        className={styles.title}
        onClick={() => handleOpenModal(data.id, "waybill")}
      >
        <p>{`Путевой лист ТСПЛ-${data.waybill_number} от ${data.date}`}</p>
      </div>


      <div
        className={vehicle ? `${styles.vehicle}` : `${styles.vehicle} ${styles.not_found}`}
        onClick={(f) => {vehicle ?  handleOpenModal(data.vehicle, "vehicle") : (f) }}
      >
        <p>{vehicle? vehicle.reg_number : 'X 000 XX 000'}</p>
      </div>
      
      
      <div
        className={addressForHTML ? `${styles.address}` : `${styles.address} ${styles.not_found}`}
        onClick={(f) => {addressForHTML ?  handleOpenModal(data.address, "address") : (f) }}
      >
        <p>{addressName}</p>
      </div>
      <div className={styles.date}>
        <p>{data.date}</p>
      </div>
      <div
        className={driver ? `${styles.driver}` : `${styles.driver} ${styles.not_found}`}
        onClick={(f) => {driver ?  handleOpenModal(data.drivers, "driver") : (f) }}
      >
        <p>{driverName}</p>
      </div>
      <div
        className={`${styles.status} ${
          data.status == "Открыт" ? styles.opened : ""
        }`}
      >
        <p>{data.status}</p>
      </div>
      <div
        className={user ? `${styles.owner}` : `${styles.owner} ${styles.not_found}`}
        onClick={(f) => {user ? handleOpenModal(data.owner, "owner") : (f) }}
      >
        <p>{userName}</p>
      </div>
      <div className={styles.control}>
        <button type="button" className={styles.icon_button}>
          <Image
            src={edit}
            alt={"Редактировать"}
            width={22}
            height={22}
            className={styles.icon}
          />
        </button>
        <button type="button" className={styles.icon_button}>
          <Image
            src={trash}
            alt={"Удалить"}
            width={22}
            height={22}
            className={styles.icon}
          />
        </button>
      </div>
    </li>
  );
};

export default WaybillRow;
