import React, { useState, useRef, useEffect } from "react";
import styles from "./waybill.module.scss";
import { WaybillsNavigation, Navigation } from "@/constants";
import Image from "next/image";
import DropdownMenu from "./DropdownMenu";

interface HeaderProps {
  currentLang: "ru" | "en";
  checkedWaybills: string[];
  setCheckedWaybills: React.Dispatch<React.SetStateAction<string[]>>;
}

const Header: React.FC<HeaderProps> = ({ currentLang, checkedWaybills, setCheckedWaybills }) => {
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const [isDisplayMenuOpen, setIsDisplayMenuOpen] = useState(false);
  const actionButtonRef = useRef<HTMLButtonElement | null>(null);
  const displayButtonRef = useRef<HTMLButtonElement | null>(null);
  const [actionMenuPosition, setActionMenuPosition] = useState({ top: 0, left: 0 });
  const [displayMenuPosition, setDisplayMenuPosition] = useState({ top: 0, left: 0 });

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      actionButtonRef.current && !actionButtonRef.current.contains(event.target as Node) &&
      displayButtonRef.current && !displayButtonRef.current.contains(event.target as Node)
    ) {
      setIsActionMenuOpen(false);
      setIsDisplayMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  const actions = [
    { label: "Экспорт", onClick: () => alert("export"), color: 'black' },
    { label: "В архив", onClick: () => alert("archive"), color: 'yellow' },
    { label: "Удалить", onClick: () => alert("delete"), color: 'red' },
  ];

  const displayOptions = [
    { label: "Список", onClick: () => alert("lists"), color: 'black' },
    { label: "Сетка", onClick: () => alert("grid"), color: 'grey' },
  ];

  const handleActionButtonClick = () => {
    if (actionButtonRef.current) {
      const rect = actionButtonRef.current.getBoundingClientRect();
      setActionMenuPosition({ top: rect.bottom, left: rect.left });
      setIsActionMenuOpen(prev => !prev);
      setIsDisplayMenuOpen(false);  // Close the display menu if it's open
    }
  };

  const handleDisplayButtonClick = () => {
    if (displayButtonRef.current) {
      const rect = displayButtonRef.current.getBoundingClientRect();
      setDisplayMenuPosition({ top: rect.bottom, left: rect.left });
      setIsDisplayMenuOpen(prev => !prev);
      setIsActionMenuOpen(false);  // Close the action menu if it's open
    }
  };

  return (
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
          <button
            className={styles.display}
            onClick={handleDisplayButtonClick}
            ref={displayButtonRef}
          >
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
          <button
            className={styles.action}
            onClick={handleActionButtonClick}
            ref={actionButtonRef}
          >
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
            onClick={() => setCheckedWaybills([])}
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
      <DropdownMenu
        actions={actions}
        isOpen={isActionMenuOpen}
        onClose={() => setIsActionMenuOpen(false)}
        position={actionMenuPosition}
      />
      <DropdownMenu
        actions={displayOptions}
        isOpen={isDisplayMenuOpen}
        onClose={() => setIsDisplayMenuOpen(false)}
        position={displayMenuPosition}
      />
    </div>
  );
};

export default Header;
