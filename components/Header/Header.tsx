import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>logo</div>
      <div>
        <button type="button">Синхранизация БД</button>
        <button type="button">Выгрузить БД</button>
      </div>
    </header>
  );
}
