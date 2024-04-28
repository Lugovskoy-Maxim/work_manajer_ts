import styles from "./waybillRow.module.scss";
import Image from "next/image";
import edit from "../../public/icons/edit.svg";
import trash from "../../public/icons/trash.svg";
import { openModal } from "../../store/modal/slice";
import { useDispatch, useSelector } from "react-redux";

interface dataProps {
  id: string;
  title: string;
  address: string;
  date: string;
  driver: string;
  status: string;
  owner: string;
}

export default function WaybillRow() {
const data: dataProps = {
  id: '123',
  title: 'Путевой лист ТСПЛ-33/24 от 05.04.2024',
  address: 'Кустовая площадка 537 Приразломного м/р',
  date: '08.04.2024',
  driver: 'Иванов Иван',
  status: 'Закрыт',
  owner: 'Диспечер 387',
}

  const dispatch = useDispatch();
  const handleOpenWaybillModal = () => {
    dispatch(openModal({ id: data.id, type: 'waybill'}));
  };
  return (
    <li className={styles.item}>
      <div className={styles.check}>
        <input type="checkbox" className={styles.checkbox}></input>
      </div>
      <div className={styles.control}>
      <button type="button" className={styles.icon_button}>
          <Image src={edit} alt={"Редактировать"} width={22} height={22} className={styles.icon}/>
        </button>
        <button type="button" className={styles.icon_button}>
          <Image src={trash} alt={"Удалить"} width={22} height={22} className={styles.icon}/>
        </button>
      </div>
      <div className={styles.title} onClick={handleOpenWaybillModal}>
        <p>Путевой лист ТСПЛ-33/24 от 05.04.2024</p>
      </div>
      <div className={styles.address}>
        <p>Кустовая площадка 537 Приразломного м/р</p>
      </div>
      <div className={styles.date}>
        <p>08.04.2024</p>
      </div>
      <div className={styles.driver}>
        <p>Иванов Иван</p>
      </div>
      <div className={styles.status}>
        <p>Закрыт</p>
      </div>
      <div className={styles.owner}>
        <p>Диспечер 387</p>
      </div>
    </li>
  );
}
