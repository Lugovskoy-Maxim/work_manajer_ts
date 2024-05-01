import styles from "./waybillRow.module.scss";
import Image from "next/image";
import edit from "../../public/icons/edit.svg";
import trash from "../../public/icons/trash.svg";
import { openModal } from "../../store/modal/slice";
import { useDispatch, useSelector } from "react-redux";
import { WaybillDataProps } from "@/types/waybill";

export default function WaybillRow(props: WaybillDataProps) {
  const dispatch = useDispatch();
  const handleOpenModal = (
    type:
      | ""
      | "waybill"
      | "driver"
      | "organization"
      | "user"
      | "address"
      | "owner"
  ) => {
    dispatch(openModal({ id: props.data.id, type: type }));
  };

  return (
    <li className={styles.item}>
      <div className={styles.check}>
        <input type="checkbox" className={styles.checkbox}></input>
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
      <div className={styles.title} onClick={() => handleOpenModal("waybill")}>
        <p>{`Путевой лист ТСПЛ-${props.data.waybill_number} от ${props.data.date}`}</p>
      </div>
      <div
        className={styles.address}
        onClick={() => handleOpenModal("address")}
      >
        <p>{props.data.address}</p>
      </div>
      <div className={styles.date}>
        <p>{props.data.date}</p>
      </div>
      <div className={styles.driver} onClick={() => handleOpenModal("driver")}>
        <p>{props.data.drivers.name}</p>
      </div>
      <div className={styles.status}>
        <p>{props.data.status}</p>
      </div>
      <div className={styles.owner} onClick={() => handleOpenModal("owner")}>
        <p>{props.data.owner}</p>
      </div>
    </li>
  );
}
