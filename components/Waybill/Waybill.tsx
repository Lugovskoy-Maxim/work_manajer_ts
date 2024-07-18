"use client";
import React, { useState } from "react";
import styles from "./waybill.module.scss";
import { Navigation, WaybillsNavigation } from "@/constants";
import WaybillRow from "../WaybillRow/WaybillRow";
import { useWaybillData, useColumnResizing, usePagination } from "@/hooks";
import Header from "./Header";
import Footer from "./Footer";

type WaybillsNavigationKeys = keyof (typeof WaybillsNavigation)["ru"];

const columns: WaybillsNavigationKeys[] = [
  "address",
  "name",
  "status",
  "date",
  "flight",
  "driver",
  "vehicle",
  "owner",
];

export default function Waybill() {
  const [currentLang, setLang] = useState<"ru" | "en">("ru");
  const waybillData = useWaybillData();
  const { checkedWaybills, setCheckedWaybills, isChecked, setIsChecked, handleItemsPerPageChange, itemsPerPage, currentPage, totalPages, goToPrevPage, goToNextPage, currentItems, indexOfFirstItem, indexOfLastItem } = usePagination(waybillData);
  const { columnWidths, handleMouseDown } = useColumnResizing<WaybillsNavigationKeys>(columns);

  return (
    <section className={styles.waybill}>
      <Header currentLang={currentLang} checkedWaybills={checkedWaybills} />

      <div className={styles.heading}>
        <label className={styles.check}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />
        </label>
        <div className={styles.slider}></div>
        {columns.map((column) => (
          <div
            key={column}
            className={`${styles[column]} ${styles.heading_title}`}
            style={{ width: columnWidths[column] || "100px" }}
          >
            <p className={styles.table_title}>
              {WaybillsNavigation[currentLang][column]}
            </p>
            <div
              className={styles.resizer}
              onMouseDown={(e) => handleMouseDown(e, column)}
            ></div>
          </div>
        ))}
      </div>

      <ul className={styles.list}>
        {currentItems.map((waybill) => (
          <WaybillRow
            key={waybill.id}
            waybill={waybill}
            columnWidths={columnWidths}
          />
        ))}
      </ul>

      <Footer
        itemsPerPage={itemsPerPage}
        handleItemsPerPageChange={handleItemsPerPageChange}
        currentPage={currentPage}
        totalPages={totalPages}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        waybillData={waybillData}
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
      />
    </section>
  );
}
