import { useState, useRef, useEffect } from "react";

const defaultWidths = {
  address: 252,
  name: 283,
  status: 80,
  date: 227,
  flight: 150,
  vehicle: 108,
  driver: 291,
  owner: 261,
};

export const useColumnResizing = <T extends string>(columns: T[]) => {
  // Инициализация состояния columnWidths с учетом переданных столбцов и значений по умолчанию
  const [columnWidths, setColumnWidths] = useState<{ [key in T]?: number }>(() => {
    const initialWidths: { [key in T]?: number } = {};
    columns.forEach((column) => {
      initialWidths[column] = defaultWidths[column as keyof typeof defaultWidths] || 100;
    });
    return initialWidths;
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedWidths = localStorage.getItem('columnWidths');
      if (savedWidths) {
        setColumnWidths(JSON.parse(savedWidths));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('columnWidths', JSON.stringify(columnWidths));
    }
  }, [columnWidths]);

  const startX = useRef(0);
  const startWidth = useRef(0);
  const activeColumn = useRef<T | null>(null);

  const handleMouseDown = (
    e: React.MouseEvent,
    columnName: T
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
      [activeColumn.current as T]: newWidth,
    }));
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return { columnWidths, handleMouseDown };
};
