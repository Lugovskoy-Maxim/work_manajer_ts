import React from "react";
import styles from "./waybill.module.scss";
import { WaybillsNavigation, Navigation } from "@/constants";
import Image from "next/image";

interface HeaderProps {
  currentLang: "ru" | "en";
  checkedWaybills: string[];
}

const Header: React.FC<HeaderProps> = ({ currentLang, checkedWaybills }) => (
  <div className={styles.header}>
    <h1 className={styles.title_page}>
      {Navigation[currentLang].waybills}
    </h1>
    <div className={styles.experience}>
      <button type="button" className={styles.button}>
        {WaybillsNavigation[currentLang].createWaybills}
      </button>
    </div>
    <div className={styles.displayConf}>
      <div className={styles.left_block}>
        <button className={styles.display}>
          <p>Отображение</p>
          <Image
            src="/icons/down_icon.svg"
            alt="развернуть"
            width={16}
            height={16}
          />
        </button>
        <span className={styles.counter}>
          {checkedWaybills.length} выбрано
        </span>
        <button className={styles.action}>
          <p>Действие</p>
          <Image
            src="/icons/down_icon.svg"
            alt="развернуть"
            width={16}
            height={16}
          />
        </button>
        <button
          className={styles.uncheck}
          disabled={checkedWaybills.length <= 0}
        >
          <Image
            src="/icons/uncheck_icon.svg"
            alt="развернуть"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  </div>
);

export default Header;
