import styles from './withWaybill.module.scss';
import { Waybill} from "@/types/waybill";

type WaybillDataProps = {
  waybill: Waybill;
}


const ModalWithWaybill: React.FC<WaybillDataProps> = ({waybill}) => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h5 className={styles.title}>{`Путевой лист ТСПЛ-${waybill.waybill_number} от ${waybill.date}`}</h5>
      </div>
      <div className={styles.body}>
        <p>
          <strong>Адрес:</strong> {waybill.address}
        </p>
        <p>
          <strong>Дата:</strong> {waybill.date}
        </p>
        <p>
          <strong>Статус:</strong> {waybill.status}
        </p>
        <p>
          <strong>Организация:</strong> {waybill.organizations.name}
        </p>
        <p>
          <strong>Тип:</strong> {waybill.vehicle.type}
        </p>
        <p>
          <strong>Регистрационный номер:</strong> {waybill.vehicle.reg_number}
        </p>
        <p>
          <strong>Марка:</strong> {waybill.vehicle.brand}
        </p>
        <p>
          <strong>Объем кузова:</strong> {waybill.vehicle.body_volume}
        </p>
        <p>
          <strong>Топливо:</strong> {waybill.vehicle.fuel}
        </p>
        <p>
          <strong>Водитель:</strong> {waybill.drivers.name}
        </p>
        <p>
          <strong>Смена водителя:</strong> {waybill.drivers.working_shift}
        </p>
        <p>
          <strong>Создал:</strong> {waybill.owner}
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
export default ModalWithWaybill;