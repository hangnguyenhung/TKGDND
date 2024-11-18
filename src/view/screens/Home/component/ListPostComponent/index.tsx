import React from 'react'
const ListPostComponent: React.FC = () => {
  return (
    <div className='flex flex-col w-screen space-y-4 '>
      <div className='w-full py-8 mx-16 text-4xl'>DANH MỤC SẢN PHẨM</div>
      <div className='flex flex-row flex-wrap justify-around px-20 2xl:px-48'>
        <div className='py-2 border-2 border-solid 2xl:mt-0 mt-4 bg-gray-200 h-40 w-48 flex flex-col items-center justify-around item-content-hidden item'>
          <div>Option 1</div>
        </div>
        <div className='py-2 border-2 border-solid 2xl:mt-0 mt-4 bg-gray-200 h-40 w-48 flex flex-col items-center item-content-hidden justify-around item'>
          <div>Option 2</div>
        </div>
        <div className='py-2 border-2 border-solid 2xl:mt-0 mt-4 bg-gray-200 h-40 w-48 flex flex-col items-center item-content-hidden justify-around item'>
          <div>Option 3</div>
        </div>
        <div className='py-2 border-2 border-solid 2xl:mt-0 mt-4 bg-gray-200 h-40 w-48 flex flex-col items-center item-content-hidden justify-around item'>
          <div>Option 4</div>
        </div>
        <div className='py-2 border-2 border-solid 2xl:mt-0 mt-4 bg-gray-200 h-40 w-48 flex flex-col items-center item-content-hidden justify-around item'>
          <div>Option 5</div>
        </div>
      </div>
      <div className='flex items-center justify-center w-full py-8'>
        <button className='py-4 bg-gray-300 font-normal text-xl px-8'>XEM TẤT CẢ</button>
      </div>
    </div>
  )
}

export default ListPostComponent
