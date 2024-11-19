import React from 'react'

const OriginCartDetail: React.FC = () => {
  return (
    <div className='container mx-auto p-2.5 flex flex-col justify-center items-center space-y-[1.625rem] w-[80rem]'>
      <div className='flex flex-col bg-gray-100 w-full px-4 py-2 space-y-2'>
        <div className='py-2 text-3xl'>
          <p>CHI TIẾT ĐƠN HÀNG</p>
        </div>
        <div className='px-4 py-2 bg-gray-300 w-fit font-medium'>Tình trạng đơn hàng</div>
        <div className='flex flex-col py-3 text-xl font-[350] space-y-1'>
          <div className='flex items-center gap-4'>
            <div className='w-[150px]'>Mã đơn hàng</div> <div className='h-8 w-[200px] bg-gray-300'></div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-[150px]'>Ngày mua</div>
            <div className='h-8 w-[200px] bg-gray-300'></div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-[150px]'>Tổng tiền</div>
            <div className='h-8 w-[200px] bg-gray-300'></div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-[150px]'>Ghi chú</div>
            <div className='h-8 w-[400px] bg-gray-300'></div>
          </div>
        </div>
      </div>
      <div className='flex w-full px-4 bg-gray-100'>
        <div className='py-2 pl-4 space-y-3 grow'>
          <div className='text-3xl '>Thông tin người nhận</div>
          {/* <div className='flex flex-col space-y-3 text-xl font-light'>
            <p>Trần Lê Khánh Hân</p>
            <p>11 Đoàn Kết, TP. Thủ Đức, TP.Hồ Chí Minh, Việt Nam</p>
            <p>Tel: 0383188154</p>
          </div> */}

          <div className='h-[150px] text-2xl bg-gray-300 flex justify-center items-center font-bold'>THÔNG TIN</div>
        </div>
        <div className='h-auto'></div>
        <div className='w-1/2 py-2 space-y-3 pl-4'>
          <div className='text-3xl'>Phương thức thanh toán</div>
          {/* <div className='flex flex-col space-y-3 text-xl font-light'>
            <p className='py-4'>Thanh toán khi nhận hàng</p>
          </div> */}
          <div className='h-[150px] text-2xl bg-gray-300 flex justify-center items-center font-bold'>THÔNG TIN</div>
        </div>
      </div>
      <div className='flex flex-col w-full px-4 space-y-2 text-base'>
        <div className='flex justify-between w-full py-6 text-xl'>
          <div className='w-[6%] text-center'>STT</div>
          <div className='w-1/12'>Hình ảnh</div>
          <div className='w-5/12'>Tên sản phẩm</div>
          <div className='w-1/12'>Giá tiền</div>
          <div className='w-1/12'>Số lượng</div>
          <div className='w-1/12'>Thành tiền</div>
        </div>
        <div className='flex justify-between w-full py-2 text-xl border-t-[1px] border-gray-300 items-center '>
          <div className='w-[6%] text-center flex items-center justify-center'>
            <p>1</p>
          </div>
          <div className='w-1/12'>
            <div className='w-[80px] h-[112px] bg-gray-300'>
              {/* <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/origin-1.png' alt='' /> */}
            </div>
          </div>
          <div className='w-5/12'>
            <span className=' bg-gray-300 p-2'>Tên sách</span> - <span className=' bg-gray-300 p-2'>Số lượng</span>
          </div>
          <div className='w-1/12 bg-gray-300 p-2'>Giá tiền</div>
          <div className='w-1/12 text-center p-2 bg-gray-300'>Số lượng</div>
          <div className='w-1/12 bg-gray-300 p-2'>Giá tiền</div>
        </div>
        <div className='flex font-[350] justify-end space-x-2 w-full py-6 text-xl border-t-[1px] border-gray-300 items-center'>
          <div className='flex flex-col gap-2 items-end'>
            <p className='p-2 bg-gray-300 w-[150px] text-center'>Thành tiền</p>
            <p className='p-2 bg-gray-300 w-[150px] text-center'>Phí vận chuyển</p>
            <p className='p-2 bg-gray-300 w-[150px] text-center'>Gỉảm giá</p>
            <p className='p-2 bg-gray-300 w-[150px] text-center'>Tổng tiền</p>
          </div>
          {/* <div className='flex flex-col items-end font-medium'>
            <p className=''>376.000d</p>
            <p className=''>Miễn phí</p>
            <p className=''>0</p>
            <p className=''>376.000d</p>
          </div> */}
        </div>
      </div>
      {/* <div className='flex items-center justify-center w-full '>
        <button
          onClick={() => navigate('/order')}
          className='border-solid border-[1px] border-[#4848A4] p-3 rounded-lg font-[450] text-[#4848a4]'
        >
          Xem danh sách đơn hàng
        </button>
      </div> */}
    </div>
  )
}

export default OriginCartDetail
