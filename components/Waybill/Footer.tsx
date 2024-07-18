import React from "react";
import styles from "./waybill.module.scss";
import arrow_right_icon from "../../public/icons/arrow_right_icon.svg";
import arrow_left_icon from "../../public/icons/arrow_left_icon.svg";
import Image from "next/image";

interface FooterProps {
  itemsPerPage: number;
  handleItemsPerPageChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  currentPage: number;
  totalPages: number;
  goToPrevPage: () => void;
  goToNextPage: () => void;
  waybillData: { waybills: { id: string }[] };
  indexOfFirstItem: number;
  indexOfLastItem: number;
}

const Footer: React.FC<FooterProps> = ({
  itemsPerPage,
  handleItemsPerPageChange,
  currentPage,
  totalPages,
  goToPrevPage,
  goToNextPage,
  waybillData,
  indexOfFirstItem,
  indexOfLastItem,
}) => (
  <div className={styles.footer}>
    <div className={styles.pagination}>
      <div className={styles.left_block}>
        <span>{`Отображены ${indexOfFirstItem + 1}-${Math.min(
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
          <Image src={arrow_left_icon} alt={""} height={16} width={16}></Image>
        </button>
        <span>{`${currentPage}/${totalPages}`}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          <Image src={arrow_right_icon} alt={""} height={16} width={16}></Image>
        </button>
      </div>
    </div>
  </div>
);

export default Footer;
