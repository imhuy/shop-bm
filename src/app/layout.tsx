"use client";
import SideMenu from "@/components/Layout/SideMenu";
import { Poppins } from "next/font/google";
import "./globals.css";

import ContextConsumer from "@/context";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="" className={poppins.className}>
      <body className=" ">
        <ContextConsumer>
          {children}
          <SideMenu />
        </ContextConsumer>
      </body>
    </html>
  );
}
