"use client";
import React, { useState } from "react";
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
import { mokeVehicles } from "@/constants/mokeVehicles";
import { fetchVehiclesSuccess } from "@/store/vehicles/slice";
import { fetchOrganizationsSuccess } from "@/store/organizations/slice";
import { mokeOrganizations } from "@/constants/mokeOrganizations";
import { fetchAddressSuccess } from "@/store/address/slice";
import mokeAddress from "@/constants/mokeAddress";
import mokeUsers from "@/constants/mokeUsers";
import { fetchUsersSuccess } from "@/store/users/slice";

export default function Waybill() {
  const [currentLang, setLang] = useState<"ru" | "en">("ru");
  const dispatch = useDispatch();

  dispatch(fetchWaybillsSuccess(mokeWaybill));
  dispatch(fetchDriversSuccess(mokeDrivers));
  dispatch(fetchVehiclesSuccess(mokeVehicles));
  dispatch(fetchOrganizationsSuccess(mokeOrganizations));
  dispatch(fetchAddressSuccess(mokeAddress));
  dispatch(fetchUsersSuccess(mokeUsers));

  const waybillData = useSelector((state: RootState) => state.waybills);

  const [checkedWaybills, setCheckedWaybills] = useState([]);
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
  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
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
        <div className={`${styles.address} ${styles.heading_title}`}>
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].address}
          </p>
        </div>
        <div className={`${styles.name} ${styles.heading_title}`}>
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].name}
          </p>
        </div>

        <div className={`${styles.status} ${styles.heading_title}`}>
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].status}
          </p>
        </div>

        <div className={`${styles.date} ${styles.heading_title}`}>
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].date}
          </p>
        </div>
        <div className={`${styles.flight} ${styles.heading_title}`}>
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].flight}
          </p>
          <Image
            src="/icons/address.svg"
            alt={WaybillsNavigation[currentLang].vehicle}
            width={18}
            height={18}
          />
        </div>

        <div className={`${styles.vehicle} ${styles.heading_title}`}>
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].vehicle}
          </p>
        </div>
        <div className={styles.arrow}></div>
        <div className={`${styles.driver} ${styles.heading_title}`}>
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].driver}
          </p>
        </div>

        <div className={`${styles.owner} ${styles.heading_title}`}>
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].owner}
          </p>
        </div>
      </div>

      <ul className={styles.list}>
        {currentItems.map((waybill) => (
          <WaybillRow key={waybill.id} waybill={waybill} />
        ))}
      </ul>

      <div className={styles.footer}>
        <div className={styles.pagination}>
          <div className={styles.left_block}>
            <span>{`${indexOfFirstItem + 1}-${Math.min(indexOfLastItem, waybillData.waybills.length)} из ${waybillData.waybills.length}`}</span>
          </div>
          <div className={styles.right_block}>
            <p>Строк на странице: </p>
            <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
              <option value={15}>15</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <button onClick={goToPrevPage} disabled={currentPage === 1}>
              Предыдущая
            </button>
            <span>{`${currentPage}/${totalPages}`}</span>
            <button onClick={goToNextPage} disabled={currentPage === totalPages}>
              Следующая
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
