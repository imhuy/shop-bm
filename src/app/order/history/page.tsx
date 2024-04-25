"use client";
import Header from "@/components/Header";
import AppLayout from "@/components/Layout/AppLayout";
import convertNumbThousand from "@/utils/convertNumbThousand";
import { NextPage } from "next";
import { useState } from "react";

 

interface ItemType {
  // id: string;
  tradingCode: string;
  product: string;
  quantity: number;
  pay: number;
  date: string;
}
const History: NextPage<any> = () => {
  const [listOrder, setListMenu] = useState<ItemType[]>([
    {
      tradingCode: "TSKW1683822924",
      product: "Via Việt XMDT mới về ",
      quantity: 10,
      date: "2022",
      pay: 1000,
    },

    {
      tradingCode: "TSKW1683822924",
      product: "Via Việt XMDT mới về ",
      quantity: 10,
      date: "2022",
      pay: 1000,
    },

    {
      tradingCode: "TSKW1683822924",
      product: "Via Việt XMDT mới về ",
      quantity: 10,
      date: "2022",
      pay: 1000,
    },

    {
      tradingCode: "TSKW1683822924",
      product: "Via Việt XMDT mới về ",
      quantity: 10,
      date: "2022",
      pay: 1000,
    },
  ]);
  return (
    <AppLayout>
      <div className="w-full flex flex-col">
        <div className="p-6">
          <Header />
          <div className="h-[1px] bg-black bg-opacity-20 my-4 max-lg:hidden" />
        </div>
        <div className="w-full flex flex-col items-center gap-y-6">
          <div className="mt-4  w-[95%]  flex flex-wrap justify-between ">
            <div className="w-[30%] py-10 flex flex-col items-center    border shadow-md rounded-md ">
              <p className=" font-workSansSemiBold text-2xl text-primary-500">
                {convertNumbThousand(500000)}
              </p>
              <p className=" font-workSansMedium text-lg mt-1">Tổng Tiền Nạp</p>
            </div>
            <div className="w-[30%] py-10 flex flex-col items-center    border shadow-md rounded-md ">
              <p className=" font-workSansSemiBold text-2xl text-green-600">
                {convertNumbThousand(500000)}
              </p>
              <p className=" font-workSansMedium text-lg mt-1">Đã Sử Dụng</p>
            </div>
            <div className="w-[30%] py-10 flex flex-col items-center    border shadow-md rounded-md ">
              <p className=" font-workSansSemiBold text-2xl text-blue-500">
                {convertNumbThousand(500000)}
              </p>
              <p className=" font-workSansMedium text-lg mt-1">Còn Lại</p>
            </div>
          </div>
          <div className="w-[95%] overflow-auto	scrollmenu justify-center flex flex-col gap-y-8 bg-white  border shadow-md rounded-md ">
            <div className="border-b px-4 py-5">
              <span className=" font-workSansSemiBold  text-2xl">
                Lịch Sử Mua Hàng
              </span>
            </div>
            <div className="scrollmenu  ">
              <table>
                <thead>
                  <tr className="flex gap-x-6 px-5 mb-5 mt-2">
                    <th className=" w-4  text-start">
                      <span className=" font-semibold text-sm"># </span>{" "}
                    </th>
                    <th className=" w-20 max-w-[80px]  text-center">
                      <span className="font-semibold text-sm ">Số lượng </span>{" "}
                    </th>
                    <th className=" w-40 max-w-[160px] text-center">
                      <span className=" font-semibold text-sm ">
                        {" "}
                        Mã giao dịch{" "}
                      </span>{" "}
                    </th>
                    <th className=" w-52  text-center">
                      <span className=" font-semibold text-sm  ">
                        Sản phẩm{" "}
                      </span>{" "}
                    </th>
                    <th className=" w-40    text-center">
                      <span className=" font-semibold text-sm  ">
                        Thanh toán{" "}
                      </span>{" "}
                    </th>
                    <th className=" w-32  text-center">
                      <span className=" font-semibold text-sm  ">
                        Thời gian{" "}
                      </span>{" "}
                    </th>
                    <th className=" w-32  text-center">
                      <span className=" font-semibold text-sm  ">Thao tác</span>{" "}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {listOrder?.map((item: any, i: number) => (
                    <tr
                      key={i}
                      className={`flex  gap-x-6 py-5  px-5 border-b  ${
                        i % 2 == 0 ? "bg-slate-100" : ""
                      }`}
                    >
                      <td className=" text-start  w-4  ">
                        <span className="font-normal text-sm">{i + 1} </span>
                      </td>
                      <td className="text-center font-normal text-sm w-20 max-w-[80px]  ">
                        <span className=" font-normal text-sm  ">
                          {convertNumbThousand(item?.quantity)}{" "}
                        </span>
                      </td>
                      <td className="text-center font-normal text-sm  w-40 max-w-[160px]  ">
                        <span className=" font-normal text-sm  ">
                          {item?.tradingCode}
                        </span>
                      </td>
                      <td className="text-center font-normal text-sm w-52">
                        <span className=" font-normal text-sm  ">
                          {item?.product}
                        </span>
                      </td>

                      <td className="text-center font-normal text-sm w-40">
                        <span className=" font-normal text-sm  ">
                          {convertNumbThousand(item?.pay)}đ
                        </span>
                      </td>
                      <td className="text-center font-normal text-sm w-32    ">
                        <span className=" font-normal text-sm  ">
                          {item?.date}
                        </span>
                      </td>
                      <td className="text-center font-normal text-sm w-32    ">
                        <span className=" font-normal text-sm  ">-</span>
                      </td>
                      <td className="text-center font-normal text-sm w-20    ">
                        <span className=" font-normal text-sm  ">
                          {item?.currency}
                        </span>
                      </td>

                      <td className="text-center font-normal text-sm w-16    ">
                        <span className=" font-normal text-sm  ">
                          {item?.adtrust_dsl}
                        </span>
                      </td>

                      <td className="text-center font-normal text-sm w-32    ">
                        <span className=" font-normal text-sm  ">
                          {item?.adtrust_dsl}
                        </span>
                      </td>

                      <td className="text-center font-normal text-sm w-32    ">
                        <span className=" font-normal text-sm  ">
                          {item?.adtrust_dsl}
                        </span>
                      </td>

                      <td className="text-center font-normal text-sm w-20    ">
                        <span className=" font-normal text-sm  ">-</span>
                      </td>

                      <td className="text-center font-normal text-sm w-44    ">
                        <span className=" font-normal text-sm  ">
                          {item?.adtrust_dsl}
                        </span>
                      </td>

                      <td className="text-center font-normal text-sm w-32      ">
                        <span className=" font-normal text-sm  ">
                          {item?.adtrust_dsl}
                        </span>
                      </td>

                      <td className="text-center font-normal text-sm w-48     ">
                        <span className=" font-normal text-sm  ">
                          {item?.adtrust_dsl}
                        </span>
                      </td>

                      <td className="text-center font-normal text-sm w-20      ">
                        <span className=" font-normal text-sm  ">
                          {item?.adtrust_dsl}
                        </span>
                      </td>
                      <td className="text-center font-normal text-sm w-32    ">
                        <span className=" font-normal text-sm  ">
                          {item?.adtrust_dsl}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default History;
