import React from 'react'
import { useNavigate } from 'react-router-dom'
const ItemPostComponent: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate('/product')}
      className='md:w-[20rem] lg:w-[14.75rem] w-[24rem] flex flex-col items-center  hover:shadow-2xl hover:cursor-pointer mb-4 item-content-hidden item'
    >
      <div className='w-full h-[23.5rem] bg-gray-300'>
        <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/image-test.png' alt='' />
      </div>
      <div className='px-4 py-2 text-xl text-center'>Tên sách (bản thường) - Tên tác giả</div>
      <div className='text-[#4848A4] font-medium py-4'>188.000d</div>
    </div>
  )
}
export const NewBookHomeComponent: React.FC = () => {
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
    <div className='container flex flex-col w-full mx-auto'>
      <div className='py-12'>
        <p className='text-2xl'>Sách mới ra</p>
      </div>
      {items.map((item, index) => {
        return (
          <div key={`${item} + ${index}`} className='container flex flex-row flex-wrap justify-around px-8 mx-auto '>
            <ItemPostComponent />
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
          className='py-2 px-7 rounded-full text-[#4848A4] font-medium border-[3px] border-solid border-[#4848A4]'
        >
          Xem thêm
        </button>
      </div>
    </div>
  )
}
