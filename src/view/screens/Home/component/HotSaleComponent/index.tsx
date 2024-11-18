import React from 'react'
import { useNavigate } from 'react-router-dom'
const ItemPostComponent: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate('/product')}
      className='md:w-[20rem] lg:w-[14.75rem] w-[24rem] flex flex-col p-2 border shadow-lg items-center hover:shadow-2xl hover:cursor-pointer mb-4 item-content-hidden item'
    >
      <div className='w-full h-[23.5rem] bg-gray-300'>
        <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/image-test.png' alt='' />
      </div>
      <div className='px-4 mt-2 text-xl text-center'>Tên sách</div>
      <div className='text-center text-md'>Tên tác giả</div>
      <div className='font-medium px-4 py-2 mt-2 bg-gray-300'>Giá</div>
    </div>
  )
}
const HotSaleComponent: React.FC = () => {
  const [items, setItems] = React.useState<Array<string>>(['a'])
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries)
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('item-content-show')
        } else {
          entry.target.classList.remove('item-content-show')
        }
      })
    })
    const hiddenElements = document.querySelectorAll('.item-content-hidden')
    const hiddenElementsRight = document.querySelectorAll('.item-content-hidden-right')
    hiddenElements.forEach((el) => observer.observe(el))
    hiddenElementsRight.forEach((el) => observer.observe(el))
  }, [items])
  return (
    <div className=''>
      <div className='container flex flex-col w-full mx-auto'>
        <div className='py-12'>
          <p className='text-2xl'>Đang sale</p>
        </div>
        {items.map((item, index) => {
          return (
            <div key={`${item} + ${index}`} className='container flex flex-row flex-wrap justify-around px-8 mx-auto '>
              <ItemPostComponent />
              <ItemPostComponent />
              <ItemPostComponent />
              <ItemPostComponent />
            </div>
          )
        })}
        <div className='flex justify-center w-full py-8'>
          <button
            onClick={(event) => {
              event.preventDefault()
              setItems((preState) => [...preState, 'a'])
            }}
            className='py-2 px-7 font-medium border-[3px] border-solid bg-gray-300 border-gray-500'
          >
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  )
}

export default HotSaleComponent
