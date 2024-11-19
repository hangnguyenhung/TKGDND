import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderDetailView: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className='container flex flex-col mx-auto mt-20 space-y-5'>
      <div className='text-[32px] font-bold'>TÌNH TRẠNG ĐƠN HÀNG</div>
      <div className='px-6 py-12 flex flex-col space-y-5 bg-gray-100'>
        <div className='flex flex-row space-x-32 text-xl'>
          <div className='w-32 text-center'>Mã đơn hàng</div>
          <div className='w-32 text-center'>Ngày mua</div>
          <div className='w-32 text-center'>Người nhận</div>
          <div className='w-32 text-center'>Thành tiền</div>
          <div className='w-32 text-center'>Tình trạng</div>
        </div>
        <div className='w-full border-[0.5px]' />

        <div className='flex flex-row items-center space-x-32 text-xl font-bold'>
          <div className='w-32 text-center bg-gray-300 p-2'>Mã đơn</div>
          <div className='w-32 text-center bg-gray-300 p-2'>Ngày</div>
          <div className='w-32 text-center bg-gray-300 p-2'>Họ tên</div>
          <div className='w-32 text-center bg-gray-300 p-2'>Giá tiền</div>
          <div className='w-32 text-center bg-gray-300 p-2'>Tình trạng</div>
          <button
            onClick={(event) => {
              event.preventDefault()
              navigate('/origin-cart-detail')
            }}
            className='py-2 px-8 bg-gray-300 font-semibold'
          >
            Chi tiết
          </button>
        </div>
        <div className='w-full border-[0.5px]' />

        <div className='flex flex-row items-center space-x-32 text-xl font-bold'>
          <div className='w-32 text-center bg-gray-300 p-2'>Mã đơn</div>
          <div className='w-32 text-center bg-gray-300 p-2'>Ngày</div>
          <div className='w-32 text-center bg-gray-300 p-2'>Họ tên</div>
          <div className='w-32 text-center bg-gray-300 p-2'>Giá tiền</div>
          <div className='w-32 text-center bg-gray-300 p-2'>Tình trạng</div>
          <button
            onClick={(event) => {
              event.preventDefault()
              navigate('/origin-cart-detail')
            }}
            className='py-2 px-8 bg-gray-300 font-semibold'
          >
            Chi tiết
          </button>
        </div>
        <div className='w-full border-[0.5px]' />

        <div className='flex flex-row items-center space-x-32 text-xl font-bold'>
          <div className='w-32 text-center bg-gray-300 p-2'>Mã đơn</div>
          <div className='w-32 text-center bg-gray-300 p-2'>Ngày</div>
          <div className='w-32 text-center bg-gray-300 p-2'>Họ tên</div>
          <div className='w-32 text-center bg-gray-300 p-2'>Giá tiền</div>
          <div className='w-32 text-center bg-gray-300 p-2'>Tình trạng</div>
          <button
            onClick={(event) => {
              event.preventDefault()
              navigate('/origin-cart-detail')
            }}
            className='py-2 px-8 bg-gray-300 font-semibold'
          >
            Chi tiết
          </button>
        </div>
        <div className='w-full border-[0.5px]' />
      </div>
    </div>
  )
}

export default OrderDetailView
