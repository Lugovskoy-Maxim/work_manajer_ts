import React from "react";
import styles from "./waybill.module.scss";

interface FooterProps {
  itemsPerPage: number;
  handleItemsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
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
  indexOfLastItem
}) => (
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
);

export default Footer;
