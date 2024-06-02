// import passwordRegex from "@/utils/regex";
import { productApi } from "@/api-client";
import { AuthContext } from "@/context/useAuthContext";
import convertNumbThousand from "@/utils/convertNumbThousand";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { FC, Fragment, useContext, useState } from "react";
import * as yup from "yup";
import { ItemType } from "../App";
import AQForm from "../BMForm";
import BMInput from "../BMForm/BMInput";
import Spinner from "../Spinner";
import { toast } from "react-toastify";
const changePasswordValidationSchema = yup.object({
  currentNumber: yup.number().required("Vui lòng nhập số lượng cần mua"),
  // .matches(numberRegex, "Số lượng cần mua phải là số."),
});

interface IBuyModal {
  isOpen: boolean;
  closeModal: () => void;
  data: ItemType;
}

const BuyModal: FC<IBuyModal> = ({ isOpen, closeModal, data }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [textError, setTextError] = useState<string>("");
  const [inputNumber, setInputNumber] = useState<number>(1);
  const [totalAmount, setTotalAmount] = useState<number>(Number(data?.price_original));

  const { accountExtendDetail, authState } = useContext(AuthContext);

  const buyProduct = useQuery({
    queryKey: ["buyProduct", authState?.access_token],
    queryFn: async () => await productApi.buyProduct(authState?.access_token ?? "", 11, inputNumber),
    enabled: false,
  });

  const onSubmit = async (e: any) => {
    setIsLoading(true);
    await buyProduct.refetch();
    toast.success("Mua hàng thành công.", { autoClose: 4000 });
    console.log("buyProductbuyProductbuyProduct", buyProduct.data);

    // if (buyProduct.data?.code === 0) {
    //   toast.success("Mua hàng thành công.", { autoClose: 4000 });
    //   setTextError("Mua hàng thành công.");
    //   closeModal();
    // } else {
    //   toast.error("Xảy ra lỗi khi mua sản phẩm.", { autoClose: 4000 });
    //   setTextError("Xảy ra lỗi khi mua sản phẩm.");
    // }
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const onChangeNumberInput = (e: any) => {
    let inputNumber = Number(e.target.value);
    setInputNumber(inputNumber);
    if (Number.isNaN(inputNumber)) {
      setTextError("Số lượng cần mua phải là số.");
      setInputNumber(0);
    } else {
      setTextError("");
    }

    if (inputNumber * data.price_original > Number(accountExtendDetail?.amount)) {
      setTextError("Số lượng cần mua lớn hơn số tiền bạn có.");
      return;
    }
    if (inputNumber > data.inventory) {
      setTextError("Số lượng cần mua lớn hơn số còn lại trong kho.");
      return;
    }
    setTotalAmount(inputNumber * data.price_original);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              {data.sold > 0 ? (
                <Dialog.Panel className='w-full max-w-xl rounded-sm transform overflow-hidden rounded-ms bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title as='h3' className='text-2xl font-workSansBold leading-6 text-success-500'>
                    <div>
                      <p>Thanh toán đơn hàng</p>
                      <button
                        className='h-10 w-10   absolute top-3 right-2 flex justify-center items-center hover:text-success-500 hover:border-success-500 duration-100 transition-all'
                        onClick={closeModal}
                      >
                        <XMarkIcon className='h-7 w-7' />
                      </button>
                    </div>
                  </Dialog.Title>

                  <AQForm
                    defaultValues={{}}
                    validationSchemaParams={changePasswordValidationSchema}
                    onSubmit={onSubmit}
                  >
                    <BMInput
                      className='bg-white w-full   !text-black rounded-md border border-gray-300 sm:text-sm'
                      name='currentName'
                      labelText='Tên Sản phẩm'
                      placeholder='Via Việt XMDT mới về'
                      containerClassName='mt-5'
                      type='password'
                      disabled={true}
                    />
                    <BMInput
                      name='currentNumber'
                      value={inputNumber}
                      className='bg-white w-full rounded-md border border-gray-300 sm:text-sm'
                      labelText='Số lượng cần mua:'
                      placeholder='Nhập số lượng cần mua'
                      containerClassName='mt-5'
                      onChange={onChangeNumberInput}
                      disabled={isLoading}
                    />
                    <BMInput
                      name='discountCode'
                      className='bg-white w-full rounded-md border border-gray-300 sm:text-sm'
                      labelText='Mã giảm giá (nếu có)'
                      placeholder='Mã giảm giá'
                      containerClassName='mt-5'
                      // type="password"
                      disabled={isLoading}
                    />

                    <div className='text-sm  my-4 gap-y-3 flex flex-col'>
                      <div className='flex justify-between border-b py-2'>
                        <p className=' '>Giảm giá: </p>
                        <p className=' text-red-500 font-workSansSemiBold '>0đ</p>
                      </div>

                      <div className='flex justify-between'>
                        <p className='   '>Tổng tiền: </p>
                        <p className='text-red-500 font-workSansSemiBold '>{convertNumbThousand(totalAmount)}đ</p>
                      </div>
                    </div>

                    <div className='mt-4 flex  justify-between items-end'>
                      <span className='text-sm text-red-500'>{textError}</span>

                      <button
                        type='submit'
                        className='inline-flex ml-3 justify-center items-center rounded-md border border-transparent bg-success-500 hover:bg-success-600 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                        disabled={isLoading}
                      >
                        {isLoading ? <Spinner /> : <p>Thanh Toán</p>}
                      </button>
                    </div>
                  </AQForm>
                </Dialog.Panel>
              ) : (
                <Dialog.Panel className='w-full max-w-xl rounded-sm transform overflow-hidden rounded-ms bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title as='h3' className='text-2xl font-workSansBold leading-6 text-success-500'>
                    <div>
                      <p className=' text-red-500'>Sản phẩm này hiện trong kho đã hết hàng</p>
                      <button
                        className='h-10 w-10   absolute top-3 right-2 flex justify-center items-center hover:text-success-500 hover:border-success-500 duration-100 transition-all'
                        onClick={closeModal}
                      >
                        <XMarkIcon className='h-7 w-7' />
                      </button>
                    </div>
                  </Dialog.Title>

                  <AQForm
                    defaultValues={{}}
                    validationSchemaParams={changePasswordValidationSchema}
                    onSubmit={onSubmit}
                  >
                    <BMInput
                      className='bg-white w-full   !text-black rounded-md border border-gray-300 sm:text-sm'
                      name='currentName'
                      labelText='Tên Sản phẩm'
                      placeholder='Via Việt XMDT mới về'
                      containerClassName='mt-5'
                      type='password'
                      disabled={true}
                    />

                    <div className='mt-4 flex  justify-between items-end'>
                      <span className='text-sm text-red-500'>{textError}</span>

                      <button
                        type='submit'
                        className='inline-flex ml-3 justify-center items-center rounded-md border border-transparent bg-success-500 hover:bg-success-600 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                        disabled={isLoading}
                        // onClick={closeModal}
                      >
                        {isLoading ? <Spinner /> : <p>Liên hệ Admin</p>}
                      </button>
                    </div>
                  </AQForm>
                </Dialog.Panel>
              )}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BuyModal;
