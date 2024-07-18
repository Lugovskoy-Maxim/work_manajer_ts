"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./waybill.module.scss";
import { Navigation, WaybillsNavigation } from "@/constants";
import WaybillRow from "../WaybillRow/WaybillRow";
import mokeWaybill from "@/constants/mokeWaybill";
import { useDispatch, useSelector } from "react-redux";
import { fetchWaybillsSuccess } from "@/store/waybills/slice";
import { RootState } from "@/store/store";
import Image from "next/image";
import { fetchDriversSuccess } from "@/store/drivers/slice";
import mokeDrivers from "@/constants/mokeDrivers";
import { fetchVehiclesSuccess } from "@/store/vehicles/slice";
import { fetchOrganizationsSuccess } from "@/store/organizations/slice";
import { fetchAddressSuccess } from "@/store/address/slice";
import mokeAddress from "@/constants/mokeAddress";
import mokeUsers from "@/constants/mokeUsers";
import { fetchUsersSuccess } from "@/store/users/slice";
import { mokeVehicles } from "@/constants/mokeVehicles";
import { mokeOrganizations } from "@/constants/mokeOrganizations";

// Define the type for column keys
type WaybillsNavigationKeys = keyof (typeof WaybillsNavigation)["ru"];

// Use the type for columns array
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
  const dispatch = useDispatch();

  useEffect(() => {
    // Симуляция запроса API 
    dispatch(fetchWaybillsSuccess(mokeWaybill));
    dispatch(fetchDriversSuccess(mokeDrivers));
    dispatch(fetchVehiclesSuccess(mokeVehicles)); 
    dispatch(fetchOrganizationsSuccess(mokeOrganizations)); 
    dispatch(fetchAddressSuccess(mokeAddress));
    dispatch(fetchUsersSuccess(mokeUsers));
  }, [dispatch]);

  const waybillData = useSelector((state: RootState) => state.waybills);

  const [checkedWaybills, setCheckedWaybills] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const totalPages = Math.ceil(waybillData.waybills.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = waybillData.waybills.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const goToPrevPage = () => setCurrentPage((prevPage) => prevPage - 1);
  const goToNextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const [isChecked, setIsChecked] = useState(false);
  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  // логика изменения размера столбцов
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedWidths = localStorage.getItem('columnWidths');
      if (savedWidths) {
        setColumnWidths(JSON.parse(savedWidths));
      }
    }
  }, []);


  const [columnWidths, setColumnWidths] = useState<{ [key in WaybillsNavigationKeys]?: number }>({
    address: 252,
    name: 283,
    status: 80,
    date: 227,
    flight: 150,
    vehicle: 108,
    driver: 291,
    owner: 261,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('columnWidths', JSON.stringify(columnWidths));
    }
  }, [columnWidths]);

  const startX = useRef(0);
  const startWidth = useRef(0);
  const activeColumn = useRef<WaybillsNavigationKeys | null>(null);

  const handleMouseDown = (
    e: React.MouseEvent,
    columnName: WaybillsNavigationKeys
  ) => {
    startX.current = e.clientX;
    startWidth.current =
      (e.target as HTMLDivElement).parentElement?.offsetWidth || 0;
    activeColumn.current = columnName;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!activeColumn.current) return;
    const deltaX = e.clientX - startX.current;
    const newWidth = startWidth.current + deltaX;

    setColumnWidths((prevWidths) => ({
      ...prevWidths,
      [activeColumn.current as WaybillsNavigationKeys]: newWidth,
    }));
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

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

            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

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

      <div className={styles.footer}>
        <div className={styles.pagination}>
          <div className={styles.left_block}>
            <span>{`${indexOfFirstItem + 1}-${Math.min(
              indexOfLastItem,
              waybillData.waybills.length
            )} из ${waybillData.waybills.length}`}</span>
          </div>
          <div className={styles.right_block}>
            <p>Строк на странице: </p>
            <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
              <option value={15}>15</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <button onClick={goToPrevPage} disabled={currentPage === 1}>
              Предыдущая
            </button>
            <span>{`${currentPage}/${totalPages}`}</span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Следующая
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
