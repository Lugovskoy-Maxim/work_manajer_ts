"use client";
import React, { useState } from "react";
import styles from "./waybill.module.scss";
import { Navigation, WaybillsNavigation } from "@/constants";
import WaybillRow from "../WaybillRow/WaybillRow";
import mokeWaybill from "@/constants/mokeWaybill";
import { useDispatch, useSelector } from "react-redux";
import { fetchWaybillsSuccess } from "@/store/waybills/slice";
import { RootState } from "@/store/store";
import address from "../../public/icons/address.svg";
import title from "../../public/icons/title.svg";
import owner from "../../public/icons/owner.svg";
import driver from "../../public/icons/driver.svg";
import calendar_date from "../../public/icons/calendar_date.svg";
import status from "../../public/icons/status.svg";
import sort_by from "../../public/icons/sort_by.svg";
import settings from "../../public/icons/settings.svg";

import Image from "next/image";
import { fetchDriversSuccess } from "@/store/drivers/slice";
import mokeDrivers from "@/constants/mokeDrivers";
import { mokeVehicles } from "@/constants/mokeVehicles";
import { fetchVehiclesSuccess } from "@/store/vehicles/slice";
import { fetchOrganizationsSuccess } from "@/store/organizations/slice";
import { mokeOrganizations } from "@/constants/moleOrganizations";
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

  // users
  // organizations

  const waybillData = useSelector((state: RootState) => state.waybills);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = waybillData.waybills.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
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
          <button type="button" className={styles.button}>
            {WaybillsNavigation[currentLang].toExport}
          </button>
        </div>
        <div className={styles.displayConf}>
          <div className={styles.left_block}>
            <div className={styles.sort}>
              <label htmlFor="sort by" className={styles.sort}>
                <Image
                  src={sort_by}
                  alt={WaybillsNavigation[currentLang].sortBy}
                  width={18}
                  height={18}
                />
                <p>{WaybillsNavigation[currentLang].sortBy}: </p>
              </label>
              <select name="sort" id="sort by">
                <option value="byDate">Дате</option>
                <option value="byStatus">Статусу</option>
                <option value="byOwner">Автору</option>
              </select>
            </div>
            <div>

            </div>
          </div>

          <div className={styles.right_block}>
            <div className={styles.hide_closed}>
              <input type="checkbox" className={styles.checkbox}></input>
              <p>Скрыть закрытые</p>
            </div>
            <div className={styles.visible_deleted}>
              <input type="checkbox" className={styles.checkbox}></input>
              <p>Показать удалённые</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heading}>
        <div className={styles.check}>
          <p className={styles.table_title}>
            <input type="checkbox" className={styles.checkbox}></input>
          </p>
        </div>

        <div className={styles.name}>
          <Image
            src={title}
            alt={WaybillsNavigation[currentLang].name}
            width={18}
            height={18}
          />
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].name}
          </p>
        </div>
        <div className={styles.vehicle}>
          <Image
            src={address}
            alt={WaybillsNavigation[currentLang].vehicle}
            width={18}
            height={18}
          />
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].vehicle}
          </p>
        </div>
        <div className={styles.address}>
          <Image
            src={address}
            alt={WaybillsNavigation[currentLang].address}
            width={18}
            height={18}
          />
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].address}
          </p>
        </div>
        <div className={styles.date}>
          <Image
            src={calendar_date}
            alt={WaybillsNavigation[currentLang].date}
            width={18}
            height={18}
          />
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].date}
          </p>
        </div>
        <div className={styles.driver}>
          <Image
            src={driver}
            alt={WaybillsNavigation[currentLang].driver}
            width={18}
            height={18}
          />
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].driver}
          </p>
        </div>
        <div className={styles.status}>
          <Image
            src={status}
            alt={WaybillsNavigation[currentLang].status}
            width={18}
            height={18}
          />
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].status}
          </p>
        </div>
        <div className={styles.owner}>
          <Image
            src={owner}
            alt={WaybillsNavigation[currentLang].owner}
            width={18}
            height={18}
          />
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].owner}
          </p>
        </div>
        <div className={styles.control}>
          <Image
            src={settings}
            alt={WaybillsNavigation[currentLang].control}
            width={18}
            height={18}
          />
          <p className={styles.table_title}>
            {WaybillsNavigation[currentLang].control}
          </p>
        </div>
      </div>

      <ul className={styles.list}>
        {waybillData.waybills.map((waybill) => {
          return <WaybillRow key={waybill.id} waybill={waybill} />;
        })}
      </ul>

      <div className={styles.footer}>
        <div className={styles.pagination}>
          <button onClick={goToPrevPage} disabled={currentPage === 1}>
            Предыдущая
          </button>
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            Первая
          </button>
          <span>Текущая страница: {currentPage}</span>
          <button
            onClick={() =>
              setCurrentPage(
                Math.ceil(waybillData.waybills.length / itemsPerPage)
              )
            }
            disabled={
              currentPage ===
              Math.ceil(waybillData.waybills.length / itemsPerPage)
            }
          >
            Последняя
          </button>
          <button
            onClick={goToNextPage}
            disabled={
              currentPage ===
              Math.ceil(waybillData.waybills.length / itemsPerPage)
            }
          >
            Следующая
          </button>
        </div>
      </div>
    </section>
  );
}
