import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartListView: React.FC = () => {
  const navigation = useNavigate()
  return (
    <>
      <div className='container flex flex-col py-8 mx-auto'>
        <div className='text-3xl'>GIỎ HÀNG</div>
      </div>
      <div className='bg-gray-300 container mx-auto flex flex-col px-52 py-6'>
        <div className='flex flex-row items-center space-x-4 text-xl '>
          <div className='flex flex-row w-2/5 space-x-4'>
            <input type='checkbox' name='' id='' className=' border-black w-6 rounded-lg' />
            <p>Chọn tất cả</p>
          </div>
          <div className='w-1/5 text-center'>Số lượng</div>
          <div className='w-1/5 text-center'>Thành tiền</div>
        </div>
      </div>

      <div className='container flex bg-gray-100 flex-col py-12 mx-auto px-52 border-b-[0.5px] border-gray-500 '>
        <div className='flex  flex-row items-center space-x-4 text-xl font-light '>
          <div className='flex flex-row items-center w-2/5 space-x-6'>
            <input type='checkbox' className=' border-black h-6 w-6 rounded-lg' />
            <div className='w-16 h-20  bg-gray-300'></div>
            <p className='font-semibold text-xl'>Tên sách</p>
          </div>
          <div className='w-1/5 text-center'>
            <input type='number' className='w-8 h-8 text-center border-gray-400 rounded-lg border-[1px]' />
          </div>
          <div className='w-1/5 text-center '>Đơn giá</div>
          <div className='w-[10%] text-center'>Xóa</div>
        </div>
      </div>

      <div className='container flex flex-col py-12 mx-auto px-52 border-b-[0.5px] border-gray-500 '>
        <div className='flex flex-row items-center space-x-4 text-xl font-light '>
          <div className='flex flex-row items-center w-2/5 space-x-6'>
            <input type='checkbox' className=' border-black h-6 w-6 rounded-lg' />
            <div className='w-16 h-20  bg-gray-300'></div>

            <p className='font-semibold text-xl'>Tên sách</p>
          </div>
          <div className='w-1/5 text-center'>
            <input type='number' className='w-8 h-8 text-center border-gray-400 rounded-lg border-[1px]' />
          </div>
          <div className='w-1/5 text-center '>Đơn giá</div>
          <div className='w-[10%] text-center'>Xóa</div>
        </div>
      </div>

      <div className='container flex flex-col items-end pt-12 mx-auto space-y-8 pr-28'>
        <div className='flex flex-row items-center space-x-16 text-xl font-bold'>
          <div>Tổng cộng</div>
          <div className='px-2 py-3 bg-gray-300'>Tổng tiền</div>
        </div>
        <div className=''>
          <button onClick={() => navigation('/checkout')} className='py-4 bg-gray-300 px-16 text-[26px]  font-bold'>
            THANH TOÁN
          </button>
        </div>
      </div>
    </>
  )
}

export default CartListView
