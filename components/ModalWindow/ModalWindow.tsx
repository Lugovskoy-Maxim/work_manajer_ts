import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import styles from "./modalWindow.module.scss";
import close_icon from "../../public/icons/close_square.svg";
import { useEffect, useRef } from "react";
import { closeModal } from "../../store/modal/slice";
import { RootState } from "@/store/store";

export default function ModalWindow() {
  const dispatch = useDispatch();
  const { id, type, isOpen } = useSelector(
    (state: RootState) => state.modalContent
  );

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleCloseModal();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      className={`${styles.modal} ${isOpen ? styles.opened : styles.closed}`}
    >
      <div className={styles.wrapper} ref={modalRef}>
        <h2>Title</h2>
        <button className={styles.close_button} onClick={handleCloseModal}>
          <Image
            src={close_icon}
            alt={"закрыть"}
            width={35}
            height={35}
            className={styles.close_icon}
          />
        </button>
      </div>
    </section>
  );
}
