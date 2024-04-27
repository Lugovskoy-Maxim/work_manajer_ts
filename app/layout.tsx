import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Wrapper from "./wrapper";
import { Provider } from "react-redux";
import store from "@/store/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    // TODO настроить автоматическое изменение от запроса
  title: "Рабочее пространство",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
        <body className={inter.className}>{children}</body>
    </html>
  );
}
