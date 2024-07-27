import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const year = 2024;
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <p className={styles.author}>MaxiApp.ru</p>
        <div className={styles.leftBlock}>
          <p className={styles.copyright}>
            © {currentYear === year ? year : `${year}-${currentYear}`} | Все
            права защищены.
          </p>
          <p>Разработка и поддержка <Link className={styles.link} href={"https://MaximWebDev.ru"}>MaximWebDev.ru</Link></p>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
