import React from 'react'

interface QuantityInfoCartDetailComponentProps {
  quantity: number
}
interface PriceInfoCartDetailComponentProps {
  price: number
}
interface InfoCartDetailComponentProps extends React.ComponentProps<'article'> {}
export const HeaderInfoCartDetailComponent = () => {
  return (
    <section className='inline-flex items-center space-x-2'>
      <p className='font-bold text-xl'>Địa chỉ giao hàng</p>
      <p className='text-xl'>: Địa chỉ</p>
    </section>
  )
}
export const AddressInfoCartDetailComponent = () => {
  return (
    <section className='flex flex-col'>
      <p className='text-xl'>Thời gian giao hàng</p>
    </section>
  )
}
export const QuantityInfoCartDetailComponent: React.FC<QuantityInfoCartDetailComponentProps> = () => {
  //   const { quantity = 1 } = props
  return (
    <section className='flex flex-row items-center justify-start space-x-4 w-full p-[10px]'>
      {/* <p className='font-bold'>Số Lượng</p>
      <div className='flex flex-row border-[1px] border-solid border-gray-400 justify-center items-center space-x-4 py-1 px-4 rounded-lg'>
        <GrSubtract />
        <p>{quantity}</p>
        <FaPlus />
      </div> */}
      <div className='px-4 py-2 bg-gray-300 w-[300px] text-center'>Số lượng</div>
    </section>
  )
}
export const PriceInfoCartDetailComponent: React.FC<PriceInfoCartDetailComponentProps> = () => {
  //   const { price = 10000 } = props
  return (
    <section className='flex flex-row items-center justify-start space-x-4 w-full p-[10px]'>
      <p className='font-bold bg-gray-300 px-4 py-2 w-[300px] text-center'>Tổng tiền</p>
      {/* <p className=''>{price}đ</p> */}
    </section>
  )
}
export const ButtonInfoCartDetailComponent = () => {
  //   const navigate = useNavigate()
  return (
    <section className='flex flex-row items-center justify-center space-x-4 w-full p-[10px]'>
      {/* <Button
        onClick={(event) => {
          event.preventDefault()
          navigate('/checkout')
        }}
        variant='contained'
        width={'240px'}
        height='40px'
      >
        Mua Ngay
      </Button>
      <Button
        onClick={(event) => {
          event.preventDefault()
          navigate('/cart')
        }}
        width={'240px'}
        height={'40px'}
        variant={'outlined'}
        rounded={'md'}
      >
        Thêm vào giỏ hàng
      </Button> */}
      <button className=' bg-gray-300 w-1/3 px-4 py-2'>Mua ngay</button>
      <button className=' bg-gray-300 w-1/3 px-4 py-2'>Thêm vào giỏ hàng</button>
    </section>
  )
}
export const InfoCartDetailComponent: React.FC<InfoCartDetailComponentProps> = () => {
  return (
    <article className='w-[640px] bg-gray-100 flex flex-col p-4 space-y-4'>
      <HeaderInfoCartDetailComponent />
      <div className='w-full' />
      <AddressInfoCartDetailComponent />
      <QuantityInfoCartDetailComponent quantity={1} />
      <PriceInfoCartDetailComponent price={100000} />
      <ButtonInfoCartDetailComponent />
    </article>
  )
}
