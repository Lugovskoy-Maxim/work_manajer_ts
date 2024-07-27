import styles from "./header.module.scss";
import logo_icon from "../../public/icons/tomilo_icon.svg";
import information_icon from "../../public/icons/information_icon.svg";
import default_user_image from "../../public/icons/default_user-image.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div></div>
      <Link className={styles.logo} href={"#"}>
        <Image src={logo_icon} alt={"ТС"} width={200} height={60} />
      </Link>
      <form className={styles.form}>
        <input
          type="search"
          placeholder="Поиск..."
          className={styles.input}
        ></input>
      </form>
      {/*  */}
      <div className={styles.buttons}>
        <button type="button" className={styles.information}>
        <Image
            src={information_icon}
            alt={"Avatar"}
            width={25}
            height={25}
          ></Image>
        </button>
        <button type="button" className={styles.profile}>
          <Image
            src={default_user_image}
            alt={"Avatar"}
            width={32}
            height={32}
          ></Image>
        </button>
      </div>
    </header>
  );
}
