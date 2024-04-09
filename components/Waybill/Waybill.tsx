import React from "react";
import styles from "./waybill.module.scss";

export default function Waybill() {
  return (
    <section className={styles.waybill}>
      <div className={styles.header}>
        <h1>Путевые листы</h1>
        <div>сортировка</div>
        <div>создать путевой лист</div>
      </div>
      <ul className={styles.list}>
        <li>
          <div className={styles.contol}>
            <input type="checkbox"></input>
            <div>
              <button type="button">edit</button>
              <button type="button">info</button>
            </div>
            <div>
              <p>путевой лист ТСПЛ-33/24 от 05.04.2024</p>
            </div>
          </div>
        </li>
      </ul>
      <div>{`< 1 2 3 >`}</div>
    </section>
  );
}
