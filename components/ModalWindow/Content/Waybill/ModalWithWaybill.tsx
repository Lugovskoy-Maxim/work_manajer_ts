import { useSelector } from "react-redux";
import styles from "./withWaybill.module.scss";
import { Waybill } from "@/types/waybill";
import { RootState } from "@/store/store";
import { Address } from "@/types/address";
import { Driver } from "@/types/driver";
import { User } from "@/types/user";
import { Organization } from "@/types/organization";
import { Vehicle } from "@/types/vehicle";

type WaybillDataProps = {
  waybill: Waybill;
};

const ModalWithWaybill: React.FC<WaybillDataProps> = ({ waybill }) => {
  // ADDRESS
  const address = useSelector((state: RootState) => state.address.address);
  const findAddressById = (addressId: string): Address | undefined => {
    return address.find((address) => address.id === addressId);
  };
  const addressForHTML = findAddressById(waybill.address);
  // const addressName = addressForHTML
  //   ? `${
  //       addressForHTML.name
  //         ? addressForHTML.name
  //         : `${addressForHTML.street} ${
  //             addressForHTML.buildingNumber ? addressForHTML.buildingNumber : ""
  //           }`
  //     }`
  //   : "Адрес не найден";
  //

  // DRIVER
  const drivers = useSelector((state: RootState) => state.drivers.drivers);
  const findDriverById = (driverId: string): Driver | undefined => {
    return drivers.find((driver) => driver.id === driverId);
  };
  const driver = findDriverById(waybill.drivers);
  // const driverName = driver
  //   ? `${driver.firstName} ${driver.lastName}`
  //   : "Водитель не найден";
  //

  // OWNER
  const users = useSelector((state: RootState) => state.users.users);
  const findUserById = (userId: string): User | undefined => {
    return users.find((user) => user.id === userId);
  };
  const user = findUserById(waybill.owner);
  const userName = user
    ? `${user.firstName} ${user.lastName}`
    : "Пользователь не найден";
  //

  // ORGANIZATIONS
  const organizations = useSelector(
    (state: RootState) => state.organizations.organizations
  );
  const findOrganizationsById = (
    organizationsId: string
  ): Organization | undefined => {
    return organizations.find(
      (organization) => organization.id === organizationsId
    );
  };
  const organization = findOrganizationsById(waybill.organizations);
  // const userName = user
  //   ? `${user.firstName} ${user.lastName}`
  //   : "Пользователь не найден";
  // //

  // VEHICLE
  const vehicles = useSelector((state: RootState) => state.vehicles.vehicles);
  const findVehiclesById = (vehicleId: string): Vehicle | undefined => {
    return vehicles.find((vehicle) => vehicle.id === vehicleId);
  };
  const vehicle = findVehiclesById(waybill.vehicle);
  // const vehicleName = user
  //   ? `${user.firstName} ${user.lastName}`
  //   : "Пользователь не найден";
  //

  // Address
  // const address = useSelector((state: RootState) => state.address.address);
  // const findAddressById = (addressId: string): Address | undefined => {
  //   return address.find((address_item) => address_item.id === addressId);
  // };
  // const address_item = findAddressById(waybill.address);
  // const vehicleName = user
  //   ? `${user.firstName} ${user.lastName}`
  //   : "Пользователь не найден";
  //

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h5
          className={styles.title}
        >{`Путевой лист ТСПЛ-${waybill.waybill_number} от ${waybill.date}`}</h5>
      </div>
      <div className={styles.body}>
        <p>
          <strong>Адрес:</strong>{" "}
          {addressForHTML
            ? `${
                addressForHTML.name
                  ? addressForHTML.name
                  : `${addressForHTML.city} ${addressForHTML.street} ${addressForHTML.streetNumber}`
              }`
            : "Адрес не найден"}
        </p>
        <p>
          <strong>Дата:</strong> {waybill.date}
        </p>
        <p>
          <strong>Статус:</strong> {waybill.status}
        </p>
        <p>
          <strong>Организация:</strong>{" "}
          {organization ? organization.name : "Организация не найдена"}
        </p>
        <p>
          <strong>Тип:</strong> {vehicle ? vehicle.type : "Транспорт не найден"}
        </p>
        <p>
          <strong>Регистрационный номер:</strong>{" "}
          {vehicle ? vehicle.reg_number : "Транспорт не найден"}
        </p>
        <p>
          <strong>Марка:</strong>{" "}
          {vehicle ? vehicle.brand : "Транспорт не найден"}
        </p>
        <p>
          <strong>Объем кузова:</strong>{" "}
          {vehicle ? vehicle.body_volume : "Транспорт не найден"}
        </p>
        {waybill.fuel && (
          <p>
            <strong>Топливо:</strong> {waybill.fuel}
          </p>
        )}
        {waybill.speedometer_readings_start && (
          <p>
            <strong>Показания спидометра (начало):</strong>{" "}
            {waybill.speedometer_readings_start}
          </p>
        )}
        {waybill.speedometer_readings_end && (
          <p>
            <strong>Показания спидометра (конец):</strong>{" "}
            {waybill.speedometer_readings_end}
          </p>
        )}
        {waybill.flights && (
          <p>
            <strong>Рейсы:</strong>{" "}
            {waybill.flights}
          </p>
        )}
        <p>
          <strong>Водитель:</strong>{" "}
          {driver
            ? `${driver.firstName} ${driver.lastName}`
            : "Водитель не найден"}
        </p>
        <p>
          <strong>Смена водителя:</strong>{" "}
          {waybill.working_shift
            ? waybill.working_shift
            : "Ошибка. Идентификатор не найден"}
        </p>
      </div>
      <div className={styles.footer}>
        <button type="button" className={styles.btn} data-bs-dismiss="modal">
          Редактировать
        </button>
        <button type="button" className={styles.btn} data-bs-dismiss="modal">
          На печать
        </button>
      </div>
      <div className={styles.modal_footer}>
        <p>
          <strong>Автор:</strong> {userName}
        </p>

        <p>
          <strong>ID:</strong> {waybill.id}
        </p>
      </div>
    </div>
  );
};
export default ModalWithWaybill;
