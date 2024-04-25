"use client";
import { BoltIcon, FireIcon, HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

interface MenuItemType {
  key: string;
  icon: JSX.Element;
  label: string;
  active: boolean;
}

const SideMenu = () => {
  let pathname = usePathname();
  const onGoApp = () => {
    // router.push("/projects");
  };

  const [listMenu] = useState<MenuItemType[]>([
    {
      key: "",
      icon: <FireIcon className="h-5 w-5 mr-2" />,
      label: "Mua tài khoản",
      active: false,
    },
  ]);

  const [listMenu2] = useState<MenuItemType[]>([
    {
      key: "client/recharge",
      icon: <FireIcon className="h-5 w-5 mr-2" />,
      label: "Nạp Tiền",
      active: false,
    },
    {
      key: "client/profile",
      icon: <FireIcon className="h-5 w-5 mr-2" />,
      label: "Thông tin cá nhân",
      active: false,
    },
    {
      key: "order/history",
      icon: <BoltIcon className="h-5 w-5 mr-2" />,
      label: "Lịch sử giao dịch",
      active: false,
    },
  ]);

  const [listMenu3] = useState<MenuItemType[]>([
    {
      key: "https://2fa.live/",
      icon: <FireIcon className="h-5 w-5 mr-2" />,
      label: "Tut Miễn Phí",
      active: false,
    },
    {
      key: "https://2fa.live/",
      icon: <FireIcon className="h-5 w-5 mr-2" />,
      label: "Tạo Phôi XMDT",
      active: false,
    },
    {
      key: "https://2fa.live/",
      icon: <BoltIcon className="h-5 w-5 mr-2" />,
      label: "Tool 2fa",
      active: false,
    },
  ]);
  const _checkActiveTab = (item: MenuItemType, index: number) => {
    if (`${pathname}` === `/${item.key}`) return "bg-success-500";
    return "";
  };

  return (
    <aside className="fixed transition-all  duration-300 top-0 left-0 z-40 w-72 h-screen border-r border-black  border-opacity-10  py-6 max-lg:hidden">
      <ul className="w-full  ">
        <li className="mb-8 border-b border-black border-opacity-10">
          <button className="cursor-pointer flex  w-full justify-center">
            <h1 className=" font-workSansBold mb-2 text-3xl text-center">
              Shopbm.Com{" "}
            </h1>
          </button>
        </li>
        <div className=" border-b border-black border-opacity-10">
          <p className="px-[10px] pl-5  font-workSansSemiBold text-md  text-gray-600 ">
            Hệ thống
          </p>
          {listMenu.map((value, index) => {
            return (
              <li className="mt-2" key={value.key}>
                <div
                  className={`p-[10px] pl-5 transition-all duration-300 ${_checkActiveTab(
                    value,
                    index
                  )} w-full`}
                >
                  <Link
                    href={`/${value.key}`}
                    className={`flex transition-all   hover:font-workSansSemiBold   duration-300 ${
                      pathname === value.key
                        ? "text-dark-900 font-workSansSemiBold"
                        : "  font-workSansMedium text-dark-900"
                    }`}
                  >
                    {value.icon}
                    {value.label}
                  </Link>
                </div>
              </li>
            );
          })}
        </div>
        <div className=" border-b border-black border-opacity-10">
          <p className="px-[10px] pl-5 mt-4 font-workSansSemiBold text-md  text-gray-600 ">
            Tài khoản
          </p>
          {listMenu2.map((value, index) => {
            return (
              <li className="mt-2" key={value.key}>
                <div
                  className={`p-[10px] pl-5 transition-all   duration-300 ${_checkActiveTab(
                    value,
                    index
                  )} w-full`}
                >
                  <Link
                    href={`/${value.key}`}
                    className={`flex transition-all   hover:font-workSansSemiBold   duration-300 ${
                      pathname === value.key
                        ? "text-dark-900 font-workSansSemiBold"
                        : "  font-workSansMedium text-dark-900"
                    }`}
                  >
                    {value.icon}
                    {value.label}
                  </Link>
                </div>
              </li>
            );
          })}
        </div>
        <p className="px-[10px] pl-5 mt-4 font-workSansSemiBold text-md  text-gray-600 ">
          Công Cụ{" "}
        </p>

        {listMenu3.map((value, index) => {
          return (
            <li className="mt-2" key={value.key}>
              <div
                className={`p-[10px] pl-5 transition-all  duration-300 ${_checkActiveTab(
                  value,
                  index
                )} w-full`}
              >
                <Link
                  href={`${value.key}`}
                  className={`flex transition-all   hover:font-workSansSemiBold   duration-300 ${
                    pathname === value.key
                      ? "text-dark-900 font-workSansSemiBold"
                      : "  font-workSansMedium text-dark-900"
                  }`}
                >
                  {value.icon}
                  {value.label}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="absolute left-0 bottom-0 border-t border-black border-opacity-10 w-full px-6 pt-4 pb-6">
        <ul>
          <li className="mt-2">
            <Link href={"https://twitter.com/alphaquestio"} target="_blank">
              Twitter
            </Link>
          </li>

          <li className="mt-2">
            <Link href={"https://t.me/alphaquestio"} target="_blank">
              Support
            </Link>
          </li>
          <li className="mt-2">
            <Link href={"https://discord.gg/EsMqKqjKB2"} target="_blank">
              Discord
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideMenu;
