import styles from "./waybillRow.module.scss";
import Image from "next/image";
import edit from "../../public/icons/edit.svg";
import trash from "../../public/icons/trash.svg";
import { openModal } from "../../store/modal/slice";
import { useDispatch, useSelector } from "react-redux";
import { WaybillDataProps } from "@/types/waybill";

export default function WaybillRow(props: WaybillDataProps) {
  const dispatch = useDispatch();
  const data = props.waybill;
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
    dispatch(openModal({ id: data.id, type: type }));
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
        <p>{`Путевой лист ТСПЛ-${data.waybill_number} от ${data.date}`}</p>
      </div>
      <div
        className={styles.address}
        onClick={() => handleOpenModal("address")}
      >
        <p>{data.address}</p>
      </div>
      <div className={styles.date}>
        <p>{data.date}</p>
      </div>
      <div className={styles.driver} onClick={() => handleOpenModal("driver")}>
        <p>{data.drivers.name}</p>
      </div>
      <div className={styles.status}>
        <p>{data.status}</p>
      </div>
      <div className={styles.owner} onClick={() => handleOpenModal("owner")}>
        <p>{data.owner}</p>
      </div>
    </li>
  );
}
