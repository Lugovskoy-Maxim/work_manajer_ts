import { Driver } from "@/types/driver";
import React from "react";
import styles from "./withDriver.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Waybill } from "@/types/waybill";

interface DriverProps {
  driver: Driver;
}

const ModalWithDriver: React.FC<DriverProps> = ({ driver }) => {
  const waybills = useSelector((state: RootState) => state.waybills.waybills);

  const findWaybillsByDriverId = (driverId: string): Waybill[] => {
    return waybills.filter((waybill) => waybill.drivers === driverId);
  };

  const previousTrips = findWaybillsByDriverId(driver.id);

  return (
    <div className={styles.modal_content}>
      <div className={styles.modal_header}>
        <h5 className={styles.modal_title}>Информация о водителе</h5>
      </div>
      <div className={styles.modal_body}>
        {/* <p>
          <strong>Name:</strong> {driver.name}
        </p> */}
        <p>
          <strong>Имя:</strong> {driver.firstName}
        </p>
        <p>
          <strong>Фамилия:</strong> {driver.lastName}
        </p>
        <p>
          <strong>Отчество:</strong> {driver.middleName}
        </p>
        <p>
          <strong>Номер вод. удостоверения:</strong> {driver.licenseNumber}
        </p>
        <p>
          <strong>Дата получения вод. удостоверения:</strong>{" "}
          {driver.licenseDate}
        </p>
        <p>
          <strong>Организация:</strong> {driver.organizations}
        </p>
        <p>
          <strong>Дата рождения:</strong> {driver.birthDay}
        </p>

        {/* <p>
          <strong>Рабочая смена:</strong> {driver.working_shift}
        </p> */}
      </div>

      <div>
        <p>Предыдущие поездки</p>
        <ul className={styles.last_waybills_list}>
          {previousTrips.slice(0,5)
            ? previousTrips.map((waybill) => (
                <li key={waybill.id} className={styles.last_waybill}>
                  <p>{`Путевой лист ТСПЛ-${waybill.waybill_number} от ${waybill.date}`}</p>
                </li>
              ))
            : "Поездок нет"}
        </ul>
      </div>
      <div className={styles.modal_footer}>
        <p>
          <strong>Автор:</strong> {driver.owner}
        </p>

        <p>
          <strong>ID:</strong> {driver.id}
        </p>
      </div>
    </div>
  );
};

export default ModalWithDriver;
