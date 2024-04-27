"use client";
import React, { useState } from "react";
import styles from "./waybill.module.scss";
import Image from "next/image";
import edit from "../../public/icons/edit.svg";
import trash from "../../public/icons/trash.svg";
import { Navigation, WaybillsNavigation } from "@/constants";
import WaybillRow from "../WaybillRow/WaybillRow";
import Link from "next/link";

export default function Waybill() {
  const [currentLang, setLang] = useState<"ru" | "en">("ru");

  return (
    <section className={styles.waybill}>
      <div className={styles.header}>
        <h1 className={styles.title_page}>
          {Navigation[currentLang].waybills}
        </h1>

        <div className={styles.experience}>
          <button type="button" className={styles.button}>
            {WaybillsNavigation[currentLang].createWaybills}
          </button>
          <button type="button" className={styles.button}>
            {WaybillsNavigation[currentLang].print}
          </button>
        </div>
        <div className={styles.displayConf}>
          <div className={styles.sort}>
            <label htmlFor="sort by">
              <p>{WaybillsNavigation[currentLang].sortBy}: </p>
            </label>
            <select name="sort" id="sort by">
              <option value="byDate" selected>
                Дате
              </option>
              <option value="byStatus">Статусу</option>
              <option value="byOwner">Автору</option>
            </select>
          </div>
          <div>
            <div className={styles.display}>
              <label htmlFor="display by">
                <p>{WaybillsNavigation[currentLang].displayBy}:</p>
              </label>
              <select name="sort" id="display by">
                <option value="25" selected>
                  25
                </option>
                <option value="50">50</option>
                {/* <option value="100">100</option> */}
              </select>
            </div>
          </div>
          {/* <p className={styles.display}>Отображено 10 из 125</p> */}
        </div>
      </div>

      <div className={styles.heading}>
        <div className={styles.control}>
          <p className={styles.table_title}>
            <input type="checkbox" className={styles.checkbox}></input>
          </p>
        </div>
        <div className={styles.name}>
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].name}
          </p>
        </div>
        <div className={styles.date}>
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].date}
          </p>
        </div>
        <div className={styles.status}>
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].status}
          </p>
        </div>
        <div className={styles.owner}>
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].owner}
          </p>
        </div>
      </div>
      <ul className={styles.list}>
        <WaybillRow />
        <WaybillRow />
        <WaybillRow />
        <WaybillRow />
        <WaybillRow />
        <WaybillRow />
        <WaybillRow />
        <WaybillRow />
        <WaybillRow />
        <WaybillRow />
        <WaybillRow />
        <WaybillRow />
      </ul>

      <div className={styles.footer}>
        <div className={styles.pagination}>{`< 1 2 3 >`}</div>
      </div>
    </section>
  );
}
