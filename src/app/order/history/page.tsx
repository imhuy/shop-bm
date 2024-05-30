"use client";
import { productApi } from "@/api-client";
import Header from "@/components/Header";
import AppLayout from "@/components/Layout/AppLayout";
import { AuthContext } from "@/context/useAuthContext";
import convertNumbThousand from "@/utils/convertNumbThousand";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { NextPage } from "next";
import { useContext, useState } from "react";

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
  const { authState, accountExtendDetail, getAccountExtendDetails } = useContext(AuthContext);

  const { isPending, error, data } = useQuery({
    queryKey: ["getBuyHistory", authState?.access_token],
    queryFn: async () => await productApi.buyHistory(authState?.access_token ?? ""),
  });

  console.log("datadatadatadata", isPending, data);
  return (
    <AppLayout>
      <div className='w-full h-screen flex flex-col'>
        <div className='p-6'>
          <Header />
          <div className='h-[1px] bg-black bg-opacity-20 my-4 max-lg:hidden' />
        </div>
        <div className='w-full flex flex-col items-center gap-y-6'>
          <div className='mt-4  w-[95%]  flex flex-wrap justify-between '>
            <div className='w-[30%] py-10 bg-white flex flex-col items-center    border shadow-md rounded-md '>
              <p className=' font-workSansSemiBold text-2xl text-primary-500'>
                {convertNumbThousand(accountExtendDetail?.total_amount)}
              </p>
              <p className='text-sm font-workSansSemiBold  text-center mt-1'>Tổng Tiền Nạp</p>
            </div>
            <div className='w-[30%] py-10 flex bg-white flex-col items-center    border shadow-md rounded-md '>
              {accountExtendDetail?.total_amount && accountExtendDetail?.amount && (
                <p className=' font-workSansSemiBold text-2xl text-green-600'>
                  {convertNumbThousand(accountExtendDetail?.total_amount - accountExtendDetail?.amount)}
                </p>
              )}
              <p className='   text-sm font-workSansSemiBold  text-center mt-1'>Đã Sử Dụng</p>
            </div>
            <div className='w-[30%] py-10 flex bg-white flex-col items-center    border shadow-md rounded-md '>
              <p className=' font-workSansSemiBold text-2xl text-blue-500'>
                {convertNumbThousand(accountExtendDetail?.amount)}
              </p>
              <p className='   text-sm font-workSansSemiBold  text-center mt-1'>Còn Lại</p>
            </div>
          </div>
          <div className='w-[95%] overflow-auto	scrollmenu justify-center flex flex-col gap-y-8 bg-white  border shadow-md rounded-md '>
            <div className='border-b px-4 py-5'>
              <span className=' font-workSansSemiBold  text-2xl'>Lịch Sử Mua Hàng</span>
            </div>
            <div className='scrollmenu  '>
              <table className='  '>
                <thead className=''>
                  <tr className='flex gap-x-6 px-5 mb-5 mt-2 '>
                    <th className=' w-4  text-start'>
                      <span className=' font-semibold text-sm'># </span>{" "}
                    </th>
                    <th className=' w-20 max-w-[80px]  text-center'>
                      <span className='font-semibold text-sm '>Số lượng </span>{" "}
                    </th>
                    <th className=' w-40 max-w-[160px] text-center'>
                      <span className=' font-semibold text-sm '> Mã giao dịch </span>{" "}
                    </th>
                    <th className=' w-52  text-center'>
                      <span className=' font-semibold text-sm  '>Sản phẩm </span>{" "}
                    </th>
                    <th className=' w-40    text-center'>
                      <span className=' font-semibold text-sm  '>Thanh toán </span>{" "}
                    </th>
                    <th className=' w-32  text-center'>
                      <span className=' font-semibold text-sm  '>Thời gian </span>{" "}
                    </th>
                    <th className=' w-32  text-center'>
                      <span className=' font-semibold text-sm  '>Thao tác</span>{" "}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {!isPending &&
                    data?.map((item: any, i: number) => (
                      <tr
                        key={i}
                        className={`flex  items-center gap-x-6 py-5  px-5 border-b ${i % 2 == 0 ? "bg-slate-100" : ""}`}
                      >
                        <td className=' text-start  w-4  '>
                          <span className='font-normal text-sm'>{i + 1} </span>
                        </td>
                        <td className='text-center font-normal text-sm w-20 max-w-[80px]  '>
                          <span className=' font-normal text-sm  '>{convertNumbThousand(item?.total)} </span>
                        </td>
                        <td className='text-center font-normal text-sm  w-40 max-w-[160px]  '>
                          <span className=' font-normal text-sm  '>TC{item?.id}</span>
                        </td>
                        <td className='text-center font-normal text-sm w-52'>
                          <span className=' font-normal text-sm  '>{item?.product_name}</span>
                        </td>

                        <td className='text-center font-normal text-sm w-40'>
                          <span className=' font-normal text-sm  '>{convertNumbThousand(item?.amount)}đ</span>
                        </td>
                        <td className='text-center font-normal text-sm w-32'>
                          <span className=' font-normal text-sm  '>
                            {moment(item.created_at).format("DD-MM-YYYY hh:mm:ss")}
                          </span>
                        </td>
                        <td className='text-center font-normal text-sm w-32'>
                          <span className=' font-normal text-sm  text-white gap-x-1   flex '>
                            <span className=' bg-blue-500 p-2 rounded-sm self-center'> Xem thêm</span>
                            <span className='  bg-green-800 p-2 rounded-sm'>Tải về</span>
                            <span className=' bg-red-700 p-2 rounded-sm'>Bảo hành</span>
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
