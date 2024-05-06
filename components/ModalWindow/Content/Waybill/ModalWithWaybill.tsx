import { WaybillDataProps } from "@/types/waybill";
import styles from './withWaybill.module.scss';

export default function ModalWithWaybill(waybill: WaybillDataProps) {
  const data = waybill.waybill;
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h5 className={styles.title}>{`Путевой лист ТСПЛ-${data.waybill_number} от ${data.date}`}</h5>
      </div>
      <div className={styles.body}>
        <p>
          <strong>Адрес:</strong> {data.address}
        </p>
        <p>
          <strong>Дата:</strong> {data.date}
        </p>
        <p>
          <strong>Статус:</strong> {data.status}
        </p>
        <p>
          <strong>Организация:</strong> {data.organizations.name}
        </p>
        <p>
          <strong>Тип:</strong> {data.vehicle.type}
        </p>
        <p>
          <strong>Регистрационный номер:</strong> {data.vehicle.reg_number}
        </p>
        <p>
          <strong>Марка:</strong> {data.vehicle.brand}
        </p>
        <p>
          <strong>Объем кузова:</strong> {data.vehicle.body_value}
        </p>
        <p>
          <strong>Топливо:</strong> {data.vehicle.fuel}
        </p>
        <p>
          <strong>Водитель:</strong> {data.drivers.name}
        </p>
        <p>
          <strong>Смена водителя:</strong> {data.drivers.working_shift}
        </p>
        <p>
          <strong>Создал:</strong> {data.owner}
        </p>
      </div>
      <div className={styles.footer}>
      <button
          type="button"
          className={styles.btn}
          data-bs-dismiss="modal"
        >
          Редактировать
        </button>
      <button
          type="button"
          className={styles.btn}
          data-bs-dismiss="modal"
        >
          На печать
        </button>
      </div>
    </div>
  );
}
