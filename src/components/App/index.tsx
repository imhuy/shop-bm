"use client";

import { FC, useState } from "react";
import Header from "../Header";
import Image from "next/image";
import convertNumbThousand from "@/utils/convertNumbThousand";
import { IconVn, TickCircle, IconUs } from "@/assets/icon";
import BuyModal from "../Modal/BuyModal";
import InfoModal from "../Modal/InfoModal";

interface AppContentTypes {
  listItemsProps?: any[];
  totalCountProps?: string;
  tab?: "watchlist" | "trending" | "newest" | string;
}

interface ItemType {
  key: string;
  title: string;
  type: number;
  // icon: JSX.Element;
  country: string;
  date: string;
  friend: string;
  checkpoint: string;
}

const AppContent: FC<AppContentTypes> = ({
  listItemsProps,

  tab,
}) => {
  const [isOpenChangePassword, setIsOpenChangePassword] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [listMenu, setListMenu] = useState<ItemType[]>([
    {
      key: "home",
      title: "Via Việt XMDT mới về   ",
      type: 1,
      // icon: <FireIcon className="h-5 w-5 mr-2" />,
      country: "Việt nam",
      date: "2022",
      friend: "1000",
      checkpoint: " Bao Check point",
    },

    {
      key: "home",
      title: "Via Việt XMDT mới về ",
      type: 1,
      // icon: <FireIcon className="h-5 w-5 mr-2" />,
      country: "Việt nam",
      date: "2022",
      friend: "1000",
      checkpoint: " Bao Check point",
    },

    {
      key: "home",
      title: "Via Việt XMDT mới về",
      type: 1,
      // icon: <FireIcon className="h-5 w-5 mr-2" />,
      country: "Việt nam",
      date: "2022",
      friend: "1000",
      checkpoint: " Bao Check point",
    },

    {
      key: "home",
      title: "Via Việt XMDT mới về",
      type: 1,
      // icon: <FireIcon className="h-5 w-5 mr-2" />,
      country: "Việt nam",
      date: "2022",
      friend: "1000",
      checkpoint: " Bao Check point",
    },
    {
      key: "home",
      title: "Via Việt XMDT mới về",
      type: 1,
      // icon: <FireIcon className="h-5 w-5 mr-2" />,
      country: "Việt nam",
      date: "2022",
      friend: "1000",
      checkpoint: " Bao Check point",
    },
    {
      key: "home",
      title: "Via Việt XMDT mới về",
      type: 1,
      // icon: <FireIcon className="h-5 w-5 mr-2" />,
      country: "Việt nam",
      date: "2022",
      friend: "1000",
      checkpoint: " Bao Check point",
    },
    {
      key: "home",
      title: "Via Việt XMDT mới về",
      type: 1,
      // icon: <FireIcon className="h-5 w-5 mr-2" />,
      country: "Việt nam",
      date: "2022",
      friend: "1000",
      checkpoint: " Bao Check point",
    },
    {
      key: "home",
      title: "Via Việt XMDT mới về",
      type: 1,
      // icon: <FireIcon className="h-5 w-5 mr-2" />,
      country: "Việt nam",
      date: "2022",
      friend: "1000",
      checkpoint: " Bao Check point",
    },
  ]);

  return (
    <div className="w-full relative ">
      <div className="p-6">
        <Header />
        <div className="h-[1px] bg-black bg-opacity-20 my-4 max-lg:hidden" />
      </div>
      <div className=" flex flex-col w-full px-2 gap-x-8">
        <div>
          <p className=" font-workSansSemiBold text-xl mb-4 pl-6">
            {" "}
            Via việt XMDT
          </p>
          <div className=" flex flex-wrap justify-center  gap-x-6  gap-y-10  ">
            {listMenu.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full  sm:w-[45%] md:w-[45%]  lg:w-[23%]   border shadow-md rounded-md"
                >
                  <div className="flex w-full  flex-col ">
                    <div className=" bg-[#ebebeb] border-b-2 flex py-4 items-center px-2">
                      {/* <FireIcon className="h-5 w-5 mr-2" /> */}
                      <Image
                        src={IconVn}
                        width={40}
                        height={40}
                        alt="home-bg"
                        className="h-8 w-8 mr-2"
                      />
                      <h4 className=" text-base font-black">{item.title} </h4>
                    </div>

                    <div className="flex flex-col gap-y-6 p-4 border">
                      <div className="flex items-center">
                        <Image
                          src={TickCircle}
                          width={16}
                          height={16}
                          alt="home-bg"
                          className="h-4 w-4 mr-2"
                        />
                        <p>Quốc gia : {item.country} </p>
                      </div>

                      <div className="flex items-center">
                        <Image
                          src={TickCircle}
                          width={16}
                          height={16}
                          alt="home-bg"
                          className="h-4 w-4 mr-2"
                        />
                        <p>Năm tạo : {item.date} </p>
                      </div>

                      <div className="flex items-center">
                        <Image
                          src={TickCircle}
                          width={16}
                          height={16}
                          alt="home-bg"
                          className="h-4 w-4 mr-2"
                        />
                        <p>Bạn bè : {item.friend} </p>
                      </div>

                      <div className="flex items-center">
                        <Image
                          src={TickCircle}
                          width={16}
                          height={16}
                          alt="home-bg"
                          className="h-4 w-4 mr-2"
                        />
                        <p>{item.checkpoint} </p>
                      </div>
                    </div>

                    <div className="flex text-sm flex-row justify-center gap-x-4 mt-2 border-b-2">
                      <div className=" border-r  w-[30%]  flex flex-col justify-center items-center">
                        <strong className="">Quốc gia</strong>
                        <p>VN</p>
                      </div>

                      <div className=" border-r  w-[30%]  flex flex-col justify-center items-center">
                        <p>Hiện có</p>
                        <strong className=" font-workSansSemiBold text-success-500 text-base rounded-full">
                          100
                        </strong>
                      </div>
                      <div className=" border-r  w-[30%]  flex flex-col justify-center items-center">
                        <p className=" line-through text-gray-400">
                          {convertNumbThousand(5000)}đ
                        </p>
                        <p className=" text-lg font-workSansSemiBold text-primary-500">
                          {convertNumbThousand(4000)}đ
                        </p>
                      </div>
                    </div>

                    <div className="py-2 flex justify-center mt-2">
                      <button
                        className="w-[85%]"
                        onClick={() => setIsOpenInfo(true)}
                      >
                        <p className="border   px-8 py-1 border-slate-400 rounded-md flex items-center justify-center	">
                          {" "}
                          Thông tin chi tiết
                        </p>
                      </button>
                    </div>

                    <div className="py-2 flex justify-center mb-4 ">
                      <button
                        className="w-[85%]"
                        onClick={() => setIsOpenChangePassword(true)}
                      >
                        <p className=" bg-primary-500 font-extrabold text-lg border  px-8 py-2 border-slate-400 rounded-md flex items-center justify-center text-white	">
                          MUA NGAY
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <p className=" font-workSansSemiBold text-xl my-4 pl-6">
            {" "}
            Via Ngoại XMDT
          </p>
          <div className=" flex flex-wrap justify-center  gap-x-6  gap-y-10  ">
            {listMenu.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full  sm:w-[45%] md:w-[45%]  lg:w-[23%]   border shadow-md rounded-md"
                >
                  <div className="flex w-full  flex-col ">
                    <div className=" bg-[#ebebeb] border-b-2 flex py-4 items-center px-2">
                      {/* <FireIcon className="h-5 w-5 mr-2" /> */}
                      <Image
                        src={IconUs}
                        width={40}
                        height={40}
                        alt="home-bg"
                        className="h-8 w-8 mr-2"
                      />
                      <h4 className=" text-base font-black">Via Us XMDT </h4>
                    </div>

                    <div className="flex flex-col gap-y-6 p-4 border">
                      <div className="flex items-center">
                        <Image
                          src={TickCircle}
                          width={16}
                          height={16}
                          alt="home-bg"
                          className="h-4 w-4 mr-2"
                        />
                        <p>Quốc gia : Us </p>
                      </div>

                      <div className="flex items-center">
                        <Image
                          src={TickCircle}
                          width={16}
                          height={16}
                          alt="home-bg"
                          className="h-4 w-4 mr-2"
                        />
                        <p>Năm tạo : {item.date} </p>
                      </div>

                      <div className="flex items-center">
                        <Image
                          src={TickCircle}
                          width={16}
                          height={16}
                          alt="home-bg"
                          className="h-4 w-4 mr-2"
                        />
                        <p>Bạn bè : {item.friend} </p>
                      </div>

                      <div className="flex items-center">
                        <Image
                          src={TickCircle}
                          width={16}
                          height={16}
                          alt="home-bg"
                          className="h-4 w-4 mr-2"
                        />
                        <p>{item.checkpoint} </p>
                      </div>
                    </div>

                    <div className="flex text-sm flex-row justify-center gap-x-4 mt-2 border-b-2">
                      <div className=" border-r  w-[30%]  flex flex-col justify-center items-center">
                        <strong className="">Quốc gia</strong>
                        <p>VN</p>
                      </div>

                      <div className=" border-r  w-[30%]  flex flex-col justify-center items-center">
                        <p>Hiện có</p>
                        <strong className=" font-workSansSemiBold text-success-500 text-base rounded-full">
                          100
                        </strong>
                      </div>
                      <div className=" border-r  w-[30%]  flex flex-col justify-center items-center">
                        <p className=" line-through text-gray-400">
                          {convertNumbThousand(5000)}đ
                        </p>
                        <p className=" text-lg font-workSansSemiBold text-primary-500">
                          {convertNumbThousand(4000)}đ
                        </p>
                      </div>
                    </div>

                    <div className="py-2 flex justify-center mt-2">
                      <button
                        className="w-[85%]"
                        onClick={() => setIsOpenInfo(true)}
                      >
                        <p className="border   px-8 py-1 border-slate-400 rounded-md flex items-center justify-center	">
                          {" "}
                          Thông tin chi tiết
                        </p>
                      </button>
                    </div>

                    <div className="py-2 flex justify-center mb-4 ">
                      <button
                        className="w-[85%]"
                        onClick={() => setIsOpenChangePassword(true)}
                      >
                        <p className=" bg-primary-500 font-extrabold text-lg border  px-8 py-2 border-slate-400 rounded-md flex items-center justify-center text-white	">
                          MUA NGAY
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <BuyModal
        isOpen={isOpenChangePassword}
        closeModal={() => setIsOpenChangePassword(false)}
      />
      <InfoModal isOpen={isOpenInfo} closeModal={() => setIsOpenInfo(false)} />
    </div>
  );
};

export default AppContent;
