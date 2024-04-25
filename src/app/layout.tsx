import SideMenu from "@/components/Layout/SideMenu";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/Layout/AppLayout";
import AppContent from "@/components/App";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en" dir="" className={poppins.className}>
      <body className=" ">
        {children}
        <SideMenu />
      </body>
    </html>
  );
}
