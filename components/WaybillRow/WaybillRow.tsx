import styles from "./waybillRow.module.scss";
import Image from "next/image";
import edit from "../../public/icons/edit.svg";
import trash from "../../public/icons/trash.svg";

export default function WaybillRow() {

  return (
    <li className={styles.item}>
      <div className={styles.check}>
        <input type="checkbox" className={styles.checkbox}></input>
      </div>
      <div className={styles.control}>
      <button type="button" className={styles.icon}>
          <Image src={edit} alt={"Редактировать"} width={22} height={22} />
        </button>
        <button type="button" className={styles.icon}>
          <Image src={trash} alt={"Удалить"} width={22} height={22} />
        </button>
      </div>
      <div className={styles.title}>
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
