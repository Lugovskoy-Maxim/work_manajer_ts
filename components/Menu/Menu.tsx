import styles from "./menu.module.scss";

export default function Header() {
  return (
    <section className={styles.menu}>
      <div className={styles.column}>
        <ul>
          <li>Путевые листы</li>
          <li>Точковка</li>
          <li>Автомобили</li>
          <li>Водители</li>
          <li>Организации</li>
          <li>Направления</li>
          <li>Сотрудники</li>
        </ul>
      </div>
      <div>Пользователь</div>
    </section>
  );
}
