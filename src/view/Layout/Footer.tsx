import React from 'react'

const FooterLayout: React.FC = () => {
  return (
    <div className='w-screen flex flex-row py-16 border-t-[0.5px] border-solid border mt-12'>
      <div className='flex flex-col w-1/3 px-6 space-y-4 text-2xl font-[400] justify-center items-center'>
        {/* <Logo className='h-32' /> */}
        <div className='h-[100px] w-[200px] text-center flex items-center justify-center bg-gray-300'>LOGO</div>
        <div className='bg-gray-200 w-full text-center px-4 py-2'>Số điện thoại</div>
        <div className='bg-gray-200 w-full text-center px-4 py-2'>Địa chỉ</div>
        <div className='bg-gray-200 w-full text-center px-4 py-2'>Email</div>
      </div>
      <div className='grid grid-cols-3 gap-6 pr-10 flex-1'>
        <div className='flex flex-col space-y-4 text-2xl'>
          <div className='font-bold'>HỖ TRỢ</div>
          <div className='font-[350] bg-gray-200 text-center px-2'>Link</div>
          <div className='font-[350] bg-gray-200 text-center px-2'>Link</div>
          <div className='font-[350] bg-gray-200 text-center px-2'>Link</div>
          <div className='font-[350] bg-gray-200 text-center px-2'>Link</div>
        </div>
        <div className='flex flex-col space-y-4 text-2xl'>
          <div className='font-bold'>CHÍNH SÁCH</div>
          <div className='font-[350] bg-gray-200 text-center px-2'>Link</div>
          <div className='font-[350] bg-gray-200 text-center px-2'>Link</div>
          <div className='font-[350] bg-gray-200 text-center px-2'>Link</div>
          <div className='font-[350] bg-gray-200 text-center px-2'>Link</div>
        </div>

        <div className='flex flex-col gap-4 text-2xl font-[400] space-x-8'>
          <div className='font-bold'>Thông tin mạng xã hội</div>

          <div className='!m-0 font-[350] bg-gray-200 items-center justify-center flex space-x-2'>
            <a href='https://www.facebook.com/customafk' target='_blank'>
              Link
            </a>
          </div>
          <div className='!m-0 font-[350] bg-gray-200 items-center justify-center flex space-x-2'>
            <a href='https://www.facebook.com/customafk' target='_blank'>
              Link
            </a>
          </div>
          <div className='!m-0 font-[350] bg-gray-200 items-center justify-center flex space-x-2'>
            <a href='https://www.facebook.com/customafk' target='_blank'>
              Link
            </a>
          </div>
          <div className='!m-0 font-[350] bg-gray-200 items-center justify-center flex space-x-2'>
            <a href='https://www.facebook.com/customafk' target='_blank'>
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterLayout
