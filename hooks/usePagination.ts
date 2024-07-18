import { useState } from "react";
import { Waybill } from "@/types/waybill";

export const usePagination = (waybillData: { waybills: Waybill[] }) => {
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

  return {
    checkedWaybills,
    setCheckedWaybills,
    isChecked,
    setIsChecked,
    handleItemsPerPageChange,
    itemsPerPage,
    currentPage,
    totalPages,
    goToPrevPage,
    goToNextPage,
    currentItems,
    indexOfFirstItem,
    indexOfLastItem,
  };
};
