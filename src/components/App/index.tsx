"use client";

import { IconVn, TickCircle } from "@/assets/icon";
import convertNumbThousand from "@/utils/convertNumbThousand";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { FC, useState } from "react";
import BuyModal from "../Modal/BuyModal";
import InfoModal from "../Modal/InfoModal";
import { FacebookIcon } from "@/assets/images";

interface AppContentTypes {
  listItemsProps?: any[];
  totalCountProps?: string;
  tab?: "watchlist" | "trending" | "newest" | string;
}

interface ItemType {
  key: string;
  title: string;
  type: number;
  icon?: JSX.Element;
  country: string;
  date: string;
  friend: string;
  checkpoint: string;
}

const AppContent: FC<AppContentTypes> = ({ listItemsProps, tab }) => {
  const [isOpenChangePassword, setIsOpenChangePassword] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [listMenu, setListMenu] = useState<ItemType[]>([
    {
      key: "home",
      title: "Via Việt XMDT mới về   ",
      type: 1,
      icon: (
        <Image
          src={TickCircle}
          width={16}
          height={16}
          alt="home-bg"
          className="h-4 w-4 mr-2"
        />
      ),
      country: "Việt nam",
      date: "2022",
      friend: "1000",
      checkpoint: " Bao Check point",
    },

    {
      key: "home",
      title: "Via Việt XMDT mới về   ",
      type: 1,
      icon: (
        <Image
          src={TickCircle}
          width={16}
          height={16}
          alt="home-bg"
          className="h-4 w-4 mr-2"
        />
      ),
      country: "Việt nam",
      date: "2022",
      friend: "1000",
      checkpoint: " Bao Check point",
    },
    {
      key: "home",
      title: "Via Việt XMDT mới về   ",
      type: 1,
      icon: (
        <Image
          src={TickCircle}
          width={16}
          height={16}
          alt="home-bg"
          className="h-4 w-4 mr-2"
        />
      ),
      country: "Việt nam",
      date: "2022",
      friend: "1000",
      checkpoint: " Bao Check point",
    },
  ]);

  const FooterMenu = () => {
    return (
      <div className="flex font-workSansMedium  flex-col bg-white justify-center mt-10 mb-5 rounded-md shadow-xls w-full">
        <div className="flex   max-sm:flex-col max-md:flex-col   justify-center   gap-y-5   w-[94%] px-2  border-b-2  pb-5    mt-5">
          <div className="flex flex-col max-sm:border-b-2 pb-2   min-w-[40%]">
            <h5 className=" font-workSansSemiBold   ml-1 text-xl">
              HỆ THỐNG CHÚNG TÔI
            </h5>
            <div className="flex flex-col gap-y-3 mt-4 ml-2 ">
              <div className=" flex  items-center gap-x-2 ">
                {" "}
                <div className=" size-8 bg-[#FEEAF3] rounded-full flex justify-center items-center">
                  <Icon
                    color="#f25062"
                    className="b  "
                    icon="ri-facebook-circle-fill"
                  />
                </div>
                <span className="text-sm">
                  Hệ thống{" "}
                  <span className=" font-workSansSemiBold">
                    {" "}
                    Nguyên Liệu Ads Facebook
                  </span>
                </span>
              </div>

              <div className=" flex  items-center gap-x-2 ">
                {" "}
                <div className=" size-8 bg-[#FEEAF3] rounded-full flex justify-center items-center">
                  <Icon
                    color="#f25062"
                    className="b  "
                    icon="ri-profile-fill"
                  />
                </div>
                <span className="text-sm">
                  Hệ thống làm phôi và nhiều chức năng khác
                </span>
              </div>
              <div className=" flex  items-center gap-x-2 ">
                {" "}
                <div className=" size-8 bg-[#FEEAF3] rounded-full flex justify-center items-center">
                  <Icon
                    color="#f25062"
                    className="b  "
                    icon="ri-shield-check-fill"
                  />
                </div>
                <span className="text-sm">
                  <span className=" font-workSansSemiBold"> BM2FA.COM </span>
                  tồn tại và đồng hành cùng Ads thủ
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col max-sm:border-b-2 pb-2  min-w-[25%]">
            <h5 className=" font-workSansSemiBold   ml-1 text-xl">HƯỚNG DẪN</h5>
            <div className="flex flex-col gap-y-3 mt-4 ml-2 ">
              <div className=" flex  items-center gap-x-2 ">
                <div className=" size-8 bg-[#FEEAF3] rounded-full flex justify-center items-center">
                  <Icon
                    color="#f25062"
                    className="b  "
                    icon="ri-money-dollar-circle-fill"
                  />
                </div>
                <span className="text-sm">Thanh toán</span>
              </div>
              <div className=" flex  items-center gap-x-2 ">
                <div className=" size-8 bg-[#FEEAF3] rounded-full flex justify-center items-center">
                  <Icon
                    color="#f25062"
                    className="b  "
                    icon="ri-shield-keyhole-fill"
                  />
                </div>
                <span className="text-sm">Bảo mật tài khoản</span>
              </div>
              <div className=" flex  items-center gap-x-2 ">
                <div className=" size-8 bg-[#FEEAF3] rounded-full flex justify-center items-center">
                  <Icon color="#f25062" className="b  " icon="ri-medal-fill" />
                </div>
                <span className="text-sm">Chính sách bảo hành</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col  pb-2  min-w-[33%]">
            <h5 className=" font-workSansSemiBold  text-xl">LIÊN HỆ</h5>
            <div className="flex flex-col gap-y-3 mt-4 ml-2 ">
              <div className=" flex  items-center gap-x-2 ">
                <div className=" size-8 bg-[#FEEAF3] rounded-full flex justify-center items-center">
                  <Icon color="#f25062" className="b  " icon="ri-medal-fill" />
                </div>
                <span className="text-sm">Địa Chỉ: Hà Huy Ngọc - Hà Nội</span>
              </div>
              <div className=" flex  items-center gap-x-2 ">
                <div className=" size-8 bg-[#FEEAF3] rounded-full flex justify-center items-center">
                  <Icon color="#f25062" className="b  " icon="ri-medal-fill" />
                </div>
                <span className="text-sm">Phone: 093.831.9999</span>
              </div>
              <div className=" flex  items-center gap-x-2 ">
                <div className=" size-8 bg-[#FEEAF3] rounded-full flex justify-center items-center">
                  <Icon color="#f25062" className="b  " icon="ri-medal-fill" />
                </div>
                <span className="text-sm">Email: Admin@bm2fa.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex   max-sm:flex-col max-md:flex-col justify-center    text-sm   w-[96%] px-2  ">
          <div className="flex flex-col max-sm:border-b-2  py-2  min-w-[40%]">
            <h5 className="   ">Copyright © BM2FA</h5>
          </div>
          <div className="flex flex-col  py-2 min-w-[25%]">
            <h5 className="">
              <span className="text-red-500 font-workSansSemiBold">
                Điều khoản{" "}
              </span>{" "}
              &{" "}
              <span className="text-red-500 font-workSansSemiBold">
                Bảo mật{" "}
              </span>
            </h5>
          </div>
          <div className="flex flex-col gap-y-3 min-w-[33%]"></div>
        </div>
      </div>
    );
  };

  const HomeHeading: React.FC<{ title: string }> = ({ title }) => {
    return (
      <div className=" font-workSansSemiBold bg-gradient-to-r flex  py-3   rounded-md text-white from-[#F25FA2] to-[#3279E1] text-xl my-4 pl-3">
        <Image
          src={FacebookIcon}
          width={30}
          height={30}
          alt="home-bg"
          className=" size-7 mr-4   "
        />
        <span> {title}</span>
      </div>
    );
  };

  return (
    <div className="w-full relative ">
      <div className=" flex flex-col w-full px-2 gap-x-8">
        <div>
          {/* {homeHeading("Mặt Hàng Bán Chạy")} */}
          <HomeHeading title="Mặt Hàng Bán Chạy" />
          <HomeHeading title="Mặt Hàng Limit Cao + Ngưỡng" />

          <div className=" grid  grid-cols-3  max-sm:grid-cols-1 max-md:grid-cols-2  gap-x-6  gap-y-10  ">
            {listMenu.map((item, index) => (
              <div
                key={index}
                className="flex w-full  bg-white text-sm    border shadow-md rounded-md"
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

                  <div className="flex flex-col gap-y-6 p-4  ">
                    <div className="flex items-center">
                      {item.icon}
                      <span className=" font-workSansMedium">
                        Quốc gia :{" "}
                        <span className=" font-workSansRegular">
                          {item.country}{" "}
                        </span>
                      </span>
                    </div>

                    <div className="flex items-center">
                      {item.icon}
                      <p>Năm tạo : {item.date} </p>
                    </div>

                    <div className="flex items-center">
                      {item.icon}
                      <p>Bạn bè : {item.friend} </p>
                    </div>

                    <div className="flex items-center">
                      {item.icon}
                      <p>{item.checkpoint} </p>
                    </div>

                    <div className="flex items-center">
                      {item.icon}
                      <p> Ngày Lập : 2008-2023 </p>
                    </div>
                  </div>

                  <div className=" grid border-t grid-cols-3 text-sm flex-row justify-center gap-x-4 border-b-2">
                    <div className="      flex flex-col justify-center items-center">
                      <strong className="">Quốc gia</strong>
                      <p>VN</p>
                    </div>

                    <div className="  border-x   flex flex-col justify-center items-center">
                      <p>Hiện có</p>
                      <strong className=" font-workSansSemiBold text-success-500 text-base rounded-full">
                        100
                      </strong>
                    </div>
                    <div className="     flex flex-col justify-center items-center">
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
                      <p className=" bg-blue-500 font-extrabold text-lg border  px-8 py-2 border-slate-400 rounded-md flex items-center justify-center text-white	">
                        MUA NGAY
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <HomeHeading title="Mặt Hàng Limit Cao + Ngưỡng" />

          <div className=" grid  grid-cols-3  max-sm:grid-cols-1 max-md:grid-cols-2  gap-x-6  gap-y-10  ">
            {listMenu.map((item, index) => (
              <div
                key={index}
                className="flex w-full  bg-white text-sm    border shadow-md rounded-md"
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

                  <div className="flex flex-col gap-y-6 p-4  ">
                    <div className="flex items-center">
                      {item.icon}
                      <span className=" font-workSansMedium">
                        Quốc gia :{" "}
                        <span className=" font-workSansRegular">
                          {item.country}{" "}
                        </span>
                      </span>
                    </div>

                    <div className="flex items-center">
                      {item.icon}
                      <p>Năm tạo : {item.date} </p>
                    </div>

                    <div className="flex items-center">
                      {item.icon}
                      <p>Bạn bè : {item.friend} </p>
                    </div>

                    <div className="flex items-center">
                      {item.icon}
                      <p>{item.checkpoint} </p>
                    </div>

                    <div className="flex items-center">
                      {item.icon}
                      <p> Ngày Lập : 2008-2023 </p>
                    </div>
                  </div>

                  <div className=" grid border-t grid-cols-3 text-sm flex-row justify-center gap-x-4 border-b-2">
                    <div className="      flex flex-col justify-center items-center">
                      <strong className="">Quốc gia</strong>
                      <p>VN</p>
                    </div>

                    <div className="  border-x   flex flex-col justify-center items-center">
                      <p>Hiện có</p>
                      <strong className=" font-workSansSemiBold text-success-500 text-base rounded-full">
                        100
                      </strong>
                    </div>
                    <div className="     flex flex-col justify-center items-center">
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
                      <p className=" bg-blue-500 font-extrabold text-lg border  px-8 py-2 border-slate-400 rounded-md flex items-center justify-center text-white	">
                        MUA NGAY
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <HomeHeading title="BM" />

          <div className=" grid  grid-cols-3  max-sm:grid-cols-1 max-md:grid-cols-2  gap-x-6  gap-y-10  ">
            {listMenu.map((item, index) => (
              <div
                key={index}
                className="flex w-full  bg-white text-sm    border shadow-md rounded-md"
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

                  <div className="flex flex-col gap-y-6 p-4  ">
                    <div className="flex items-center">
                      {item.icon}
                      <span className=" font-workSansMedium">
                        Quốc gia :{" "}
                        <span className=" font-workSansRegular">
                          {item.country}{" "}
                        </span>
                      </span>
                    </div>

                    <div className="flex items-center">
                      {item.icon}
                      <p>Năm tạo : {item.date} </p>
                    </div>

                    <div className="flex items-center">
                      {item.icon}
                      <p>Bạn bè : {item.friend} </p>
                    </div>

                    <div className="flex items-center">
                      {item.icon}
                      <p>{item.checkpoint} </p>
                    </div>

                    <div className="flex items-center">
                      {item.icon}
                      <p> Ngày Lập : 2008-2023 </p>
                    </div>
                  </div>

                  <div className=" grid border-t grid-cols-3 text-sm flex-row justify-center gap-x-4 border-b-2">
                    <div className="      flex flex-col justify-center items-center">
                      <strong className="">Quốc gia</strong>
                      <p>VN</p>
                    </div>

                    <div className="  border-x   flex flex-col justify-center items-center">
                      <p>Hiện có</p>
                      <strong className=" font-workSansSemiBold text-success-500 text-base rounded-full">
                        100
                      </strong>
                    </div>
                    <div className="     flex flex-col justify-center items-center">
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
                      <p className=" bg-blue-500 font-extrabold text-lg border  px-8 py-2 border-slate-400 rounded-md flex items-center justify-center text-white	">
                        MUA NGAY
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer  */}

        <FooterMenu />
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
