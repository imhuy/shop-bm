import AppLayout from "@/components/Layout/AppLayout";
import convertNumbThousand from "@/utils/convertNumbThousand";
import { NextPage } from "next";

const Login: NextPage<any> = () => {
  return (
    <AppLayout>
      <div className=" flex flex-1  min-h-[100vh] bg-[#E9F2FD] items-center  justify-center">
        <div className="w-[50%] justify-center flex flex-col gap-y-4 bg-white  border shadow-md rounded-md ">
          <div className="border-b px-4 py-5 justify-center flex gap-x-4">
            <span className=" font-workSansSemiBold rounded-md p-2 ">
              <a href="/client/change-password">Đăng nhập</a>
            </span>
          </div>

          <div className="flex flex-col  gap-y-4 justify-center w-[100%] items-center    ">
            <div className="flex w-[90%]  flex-col  ">
              <p className=" font-workSansMedium  mb-2 ">Tên đăng nhập</p>
              <input
                className="w-[100%] border h-12 rounded-md px-2"
                placeholder="Nhập email hoặc tên đăng nhập"
              ></input>
            </div>

            <div className="flex w-[90%]     flex-col  ">
              <p className=" font-workSansMedium  my-2">Mật khẩu</p>
              <input
                type="password"
                className="w-[100%] border h-12 rounded-md px-2"
                placeholder="Nhập mật khẩu"
              ></input>
            </div>
          </div>

          <div className=" flex flex-col  gap-y-4 mt-4  w-[100%] items-center  ">
            <div className=" flex flex-row w-[90%]   justify-between">
              <div>
                <button
                  className="w-[100%] flex justify-center items-center"
                  // onClick={() => setIsOpenChangePassword(true)}
                >
                  <input
                    type="checkbox"
                    className="  border  rounded-sm "
                    placeholder="Nhập mật khẩu"
                  ></input>
                  <p className="   font-extrabold text-sm   px-4 border-slate-400 rounded-md flex items-center justify-center	">
                    Ghi nhớ đăng nhập
                  </p>
                </button>
              </div>

              <div className="flex ">
                <button
                  className="w-[100%]"
                  // onClick={() => setIsOpenChangePassword(true)}
                >
                  <p className="  text-sm  font-extrabold  text-blue-700  border-slate-400 rounded-md flex items-center justify-center 	">
                    Quên mật khẩu
                  </p>
                </button>
              </div>
            </div>
          </div>

          <div className="w-[100%] flex  justify-center my-4 ">
            <button className=" bg-blue-500 w-[80%] text-white  font-workSansSemiBold py-3 rounded-md">
              Đăng nhập
            </button>
          </div>

          <div className="w-[100%] flex  gap-x-2 text-sm justify-center  mb-4 ">
            <p>Chưa có tài khoản?</p>

            <p className=" text-blue-500 font-workSansSemiBold">
              {" "}
              <a href="/client/register"> Đăng ký tài khoản</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Login;
