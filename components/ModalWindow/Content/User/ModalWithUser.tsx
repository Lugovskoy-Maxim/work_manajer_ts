import { User } from "@/types/user";
import React from "react";
import styles from "./modalWithUser.module.scss";
interface UserProps {
  user: User;
}
const ModalWithUser: React.FC<UserProps> = ({ user }) => {
  return (
    <>
      {user ? (
        <div className={styles.modal_content}>
          <div className={styles.modal_header}>
            <h5 className={styles.modal_title}>Информация о пользователе</h5>
          </div>
          <div className={styles.modal_body}>
            <p>
              <strong>Имя:</strong> {user.firstName}
            </p>
            <p>
              <strong>Фамилия:</strong> {user.lastName}
            </p>
            {user.object && (
              <p>
                <strong>Объекты:</strong> {user.object}
              </p>
            )}
            {user.email && (
              <p>
                <strong>Почта:</strong> {user.email}
              </p>
            )}
          </div>
          <div className={styles.modal_footer}>
            <p>
              <strong>ID:</strong> {user.id}
            </p>
          </div>
        </div>
      ) : (
        <div>{'Пользователь не найден'}</div>
      )}
    </>
  );
};

export default ModalWithUser;
