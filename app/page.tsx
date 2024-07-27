"use client";
import { Footer, Header } from "@/components";
import { Provider } from "react-redux";
import store from "@/store/store";
import styles from "./page.module.css";

import GlobalMenu from "@/components/GlobalMenu/GlobalMenu";
import Link from "next/link";
import {
  getCurrentTime,
  getCurrentDate,
  getCurrentMonth,
  getCurrentDayOfWeek,
} from "@/utils/dateTimeUtils";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(getCurrentTime());
  const [date, setDate] = useState(getCurrentDate());
  const [month, setMonth] = useState(getCurrentMonth());
  const [dayOfWeek, setDayOfWeek] = useState(getCurrentDayOfWeek());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
      setDate(getCurrentDate());
      setMonth(getCurrentMonth());
      setDayOfWeek(getCurrentDayOfWeek());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Provider store={store}>
      {/* <GlobalMenu /> */}
      <div className={styles.layout}>
        <main className={styles.main}>
          <Header />
          <div className={styles.top}>
            <div className={styles.clock}>{time}</div>
            <div className={styles.data}>
              <p className={styles.day}>{date}</p>
              <div>
                <p className={styles.mount}>{month}</p>
                <p className={styles.week}>{dayOfWeek}</p>
              </div>
            </div>
          </div>
          <div className={styles.navigation}>
            <Link href={""}>
              <div className={styles.item}>
                <h2>Аналитика</h2>
                <p>
                  Панель аналитики предоставляет вам ключевые показатели
                  производительности. Здесь вы найдете отчеты, графики и
                  визуализации данных, которые помогут вам принимать
                  обоснованные решения и отслеживать эффективность вашего
                  бизнеса в режиме реального времени.
                </p>
              </div>
            </Link>
            <Link href={""}>
              <div className={styles.item}>
                <h2>Задачи</h2>
                <p>
                  Страница задач предоставляет удобный инструмент для управления
                  повседневными заданиями и проектами. Здесь вы можете создавать
                  задачи, назначать ответственных, отслеживать прогресс
                  выполнения и получать уведомления о важных событиях и сроках.
                </p>
              </div>
            </Link>
            <Link href={"/waybills"}>
              <div className={styles.item}>
                <h2>Путевые листы</h2>
                <p>
                  Раздел путевых листов позволяет управлять всеми аспектами
                  транспортных операций. Здесь вы можете создавать,
                  редактировать и просматривать путевые листы для всех ваших
                  транспортных средств, отслеживать маршруты, статус выполнения
                  заданий.
                </p>
              </div>
            </Link>
            <Link href={""}>
              <div className={styles.item}>
                <h2>Настройки</h2>
                <p>
                  Этот раздел позволяет персонализировать и оптимизировать
                  работу приложения под ваши нужды. Здесь вы можете управлять
                  вашей учётной записью, настраивать параметры безопасности
                  иадаптировать интерфейс под свои предпочтения.
                </p>
              </div>
            </Link>
            <Link href={""}>
              <div className={styles.item}>
                <h2>База данных</h2>
                <p>
                  Раздел базы данных предоставляет доступ к центральному
                  хранилищу данных, включая информацию о клиентах, транспортных
                  средствах, водителях и других важных объектах. Здесь вы можете
                  искать, просматривать и управлять всеми данными, связанными с
                  вашей деятельностью.
                </p>
              </div>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </Provider>
  );
}
