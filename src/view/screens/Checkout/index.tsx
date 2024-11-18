import React from 'react'
import { useNavigate } from 'react-router-dom'

const CheckoutView: React.FC = () => {
  const navigate = useNavigate()
  const [step, setStep] = React.useState<number>(1)
  return (
    <>
      {step !== 3 && (
        <div className='container flex flex-col items-center mx-auto'>
          {/* <div className='flex items-center justify-center w-full px-8 py-4 space-x-4 text-xl'>
            <div className={`w-2/12 text-center ${step <= 3 && ''}`}>Điền thông tin nhận hàng</div>

            <div className='flex items-center justify-center w-2/12 space-x-4'>
              <div className={`grow border-b-[2px] border-solid ${step <= 3 ? '' : 'border-black'} `} />
              <FaCheckCircle size={24} color={`${step <= 3  : 'black'}`} />
              <div className={`grow border-b-[2px] border-solid ${step <= 3 ? '' : 'border-black'} `} />
            </div>

            <div className={`w-2/12 text-center ${step > 1 && ''}`}>Chọn phương thức thanh toán</div>

            <div className='flex items-center justify-center w-2/12 space-x-4'>
              <div className={`grow border-b-[2px] border-solid ${step > 1 ? '' : 'border-black'} `} />
              <FaCheckCircle size={24} color={`${step <= 3  : 'black'}`} />
              <div className={`grow border-b-[2px] border-solid ${step > 1 ? '' : 'border-black'} `} />
            </div>

            <div className='w-2/12 text-center'>Hoàn tất</div>
          </div> */}
          <div className='bg-gray-100 w-[500px] text-center font-bold my-4 text-xl py-2'>Tiến trình thanh toán</div>

          <div className='flex items-start justify-around w-full max-w-[1440px]'>
            {step === 1 && (
              <div className='flex flex-col w-[700px]'>
                <div className='text-[32px]  font-medium pb-4'>Thông tin nhận hàng</div>
                <form action='' className='flex flex-col gap-10'>
                  <div className='flex justify-between space-x-8 text-xl text-zinc-500'>
                    <div className='flex flex-col space-y-2 grow'>
                      <input placeholder='Họ' type='text' name='' id='' className='bg-gray-200 p-2' />
                    </div>
                    <div className='flex flex-col space-y-2 grow'>
                      <input type='text' name='' id='' className='bg-gray-200 p-2' placeholder='Tên' />
                    </div>
                  </div>

                  <div className='flex justify-between space-x-8 text-xl text-zinc-500'>
                    <div className='flex flex-col space-y-2 grow'>
                      <input type='text' name='' id='' className='bg-gray-200 p-2' placeholder='Email' />
                    </div>
                  </div>

                  <div className='flex justify-between space-x-8 text-xl text-zinc-500'>
                    <div className='flex flex-col space-y-2 grow'>
                      <input type='text' name='' id='' className='bg-gray-200 p-2' placeholder='Số điện thoại' />
                    </div>
                  </div>

                  <div className='flex justify-between space-x-8 text-xl text-zinc-500'>
                    <div className='flex flex-col space-y-2 grow'>
                      <input type='text' name='' id='' className='bg-gray-200 p-2' placeholder='Địa chỉ' />
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={(event) => {
                        event.preventDefault()
                        setStep(2)
                      }}
                      className='px-8 py-2 bg-gray-300 text-wh200 text-xl hover:shadow-lg'
                    >
                      Tiếp tục
                    </button>
                  </div>
                </form>
              </div>
            )}
            {step === 2 && (
              <div className='flex flex-col w-[700px] space-y-12'>
                <div className='flex flex-col w-full p-6 shadow-xl rounded-xl border-[0.5px] border-zinc-200 border-solid'>
                  <div className='text-lg '>Đơn hàng #02144143</div>
                  <div className='text-[42px] font-semibold text-[#000080]'>152.000 đ</div>
                </div>
                <div className='text-3xl font-[450]'>Chọn phương thức thanh toán</div>

                <div className='flex flex-col justify-center text-lg font-[500] space-y-4'>
                  <label htmlFor='check' className='flex items-center space-x-4'>
                    <input type='radio' name='radio' className='w-4' />
                    <p>Thanh toán khi nhận hàng</p>
                  </label>
                  <label htmlFor='check' className='flex items-center space-x-4'>
                    <input type='radio' name='radio' className='w-4' />
                    <p>Quét mã QR</p>
                  </label>
                  <label htmlFor='check' className='flex items-center space-x-4'>
                    <input type='radio' name='radio' className='w-4' />
                    <p>Visa / Mastercard </p>
                  </label>
                </div>

                <div>
                  <button
                    onClick={(event) => {
                      event.preventDefault()
                      setStep(3)
                    }}
                    className='px-8 py-2 bg-[#7775C5] text-wh200 text-xl hover:shadow-lg'
                  >
                    Thanh toán
                  </button>
                </div>
              </div>
            )}

            <div className='p-7 rounded-lg bg-gray-100 w-[460px] flex flex-col space-y-4'>
              <div className='text-[26px]'>Đơn hàng</div>

              <div className='py-6 flex justify-center items-center bg-gray-300 h-[200px]'>
                {/* <div className='flex flex-wrap text-base'>
                  <p className='w-full'>CLOVER (CLAMP) - Box Set 2 Tập</p>
                  <p className='flex items-center justify-end w-full space-x-2 text-end'>
                    <p className='text-xs line-through text-zinc-500'>90.000d</p>
                    <p>81.000d</p>
                    <p className='px-4'>1</p>
                    <p>81.000d</p>
                  </p>
                </div> */}
                Thông tin đơn hàng
              </div>

              <div className='flex flex-col space-y-2'>
                <div className='text-zinc-500'>Mã giảm giá</div>
                <div className='flex justify-between space-x-2'>
                  <div className='w-[65%] bg-gray-300'></div>
                  <div className='w-[30%] text-center px-4 py-2 bg-gray-300'>Nhập</div>
                </div>
              </div>

              <div className='flex flex-col text-[18px] pt-6 space-y-4'>
                <div className='flex justify-between'>
                  <div>Tạm tính</div>
                  <div className='bg-gray-300 px-4 py-2'>Giá tiền</div>
                </div>
                <div className='flex justify-between'>
                  <div>Phí ship</div>
                  <div className='bg-gray-300 px-4 py-2'>Giá tiền</div>
                </div>
                <div className='flex justify-between'>
                  <div>Giảm giá</div>
                  <div className='bg-gray-300 px-4 py-2'>Giá tiền</div>
                </div>
                <div className='flex justify-between'>
                  <div className='text-2xl font-bold'>Tổng cộng</div>
                  <div className='bg-gray-300 px-4 py-2'>Giá tiền</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className='container flex flex-col items-center justify-center mx-auto space-y-2 h-96'>
          <div className='text-3xl font-medium'>BẠN ĐÃ ĐẶT HÀNG THÀNH CÔNG</div>
          <div className='text-3xl font-extralight'>Mã đơn hàng #02144143</div>
          <div className='pt-8'>
            <button
              onClick={(event) => {
                event.preventDefault()
                navigate('/home')
              }}
              className='rounded-lg shadow-xl px-8 text-xl bg-[#7775C5] py-3 text-white'
            >
              Quay về trang chủ
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default CheckoutView
