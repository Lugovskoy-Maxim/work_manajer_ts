import { WaybillProps } from "@/types/waybill";

export default function ModalWithWaybill(waybill: WaybillProps) {
  const data = waybill.waybill;
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title"></h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <p>
          <strong>ID:</strong> {data.id}
        </p>
        <p>
          <strong>Номер путевого листа:</strong> {data.waybill_number}
        </p>
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
          <strong>Владелец:</strong> {data.owner}
        </p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Отменить
        </button>
      </div>
    </div>
  );
}
