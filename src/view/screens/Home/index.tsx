import React from 'react'
import { HeaderHomeComponent } from './component/HeaderHomeComponent'
import { NewBookHomeComponent } from './component'
import BestSellerComponent from './component/BestSellerComponent'
import ListPostComponent from './component/ListPostComponent'
import HotSaleComponent from './component/HotSaleComponent'

const HomeView: React.FC = () => {
  return (
    <article className='flex flex-col'>
      <HeaderHomeComponent />
      <NewBookHomeComponent />
      <BestSellerComponent />
      <HotSaleComponent />

      <div className='w-full flex flex-col justify-center items-center space-y-8 py-8 bg-gray-100'>
        <p className='text-4xl font-medium'>DANH MỤC CHÍNH SÁCH</p>
        <div className='flex flex-row space-x-36'>
          <div className='flex flex-col items-center space-y-4 w-52'>
            {/* <FaTruckMonster size={120} className='text-gray-400' />
            <p className='text-2xl text-center'>Vân chuyển nhanh chóng</p> */}
            <div className='h-[120px] aspect-square bg-gray-200'></div>
            <p className='text-2xl text-center'>Option 1</p>
          </div>
          <div className='flex flex-col items-center space-y-4 w-52'>
            {/* <FaPager size={120} className='text-gray-400' />
            <p className='text-2xl text-center'>Khuyến mãi hấp dẫn</p> */}
            <div className='h-[120px] aspect-square bg-gray-200'></div>
            <p className='text-2xl text-center'>Option 2</p>
          </div>
          <div className='flex flex-col items-center space-y-4 w-52'>
            {/* <FaBookOpen size={120} className='text-gray-400' />
            <p className='text-2xl text-center'>Sách truyện phong phú</p> */}
            <div className='h-[120px] aspect-square bg-gray-200'></div>
            <p className='text-2xl text-center'>Option 3</p>
          </div>
        </div>
      </div>
      <ListPostComponent />

      <div
        style={{ backgroundImage: 'url(https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/header-expect.png)' }}
        className='w-screen h-[27rem] flex flex-col justify-center items-center space-y-4 bg-gray-100'
      >
        <div className='w-screen h-full flex flex-col justify-center items-center space-y-4'>
          <p className='mt-8 text-6xl font-medium'>Quảng cáo</p>
          <div className='flex items-center justify-center py-4'></div>
        </div>
      </div>
    </article>
  )
}
export default HomeView
