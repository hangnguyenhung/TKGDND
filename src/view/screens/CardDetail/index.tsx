import React from 'react'
import { InfoCartDetailComponent } from './components/InfoCartDetailComponent'

const CardDetailView: React.FC = () => {
  const [isShowMoreText, setIsShowMoreText] = React.useState<boolean>(false)
  return (
    <div className='container flex flex-row flex-wrap justify-center p-10 mx-auto '>
      <div className='flex flex-col p-5 border h-fit'>
        <div className='flex flex-col items-center p-5 space-y-5'>
          <div className='2xl:h-[37rem] 2xl:w-[37rem] text-3xl flex items-center justify-center h-[32rem] w-[32rem] aspect-square bg-gray-300 border'>
            {/* <img
              src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png'
              className='w-full aspect-square'
              alt=''
            /> */}
            Ảnh bìa
          </div>
          {/* <div className='flex flex-row justify-between 2xl:w-[37rem] w-[32rem] h-[6.25rem]'>
            <div className='2xl:h-[6.25rem] 2xl:w-[6.25rem] w-[5rem] h-[5rem] aspect-square bg-slate-400 border overflow-hidden'>
              <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png' alt='' />
            </div>
            <div className='2xl:h-[6.25rem] 2xl:w-[6.25rem] w-[5rem] h-[5rem] aspect-square bg-slate-400 border overflow-hidden'>
              <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png' alt='' />
            </div>
            <div className='2xl:h-[6.25rem] 2xl:w-[6.25rem] w-[5rem] h-[5rem] aspect-square bg-slate-400 border overflow-hidden'>
              <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png' alt='' />
            </div>
            <div className='2xl:h-[6.25rem] 2xl:w-[6.25rem] w-[5rem] h-[5rem] aspect-square bg-slate-400 border overflow-hidden'>
              <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png' alt='' />
            </div>
            <div className='2xl:h-[6.25rem] 2xl:w-[6.25rem] w-[5rem] h-[5rem] aspect-square bg-slate-400 border overflow-hidden'>
              <img src='https://customafk.s3.ap-southeast-1.amazonaws.com/IE106/test-order.png' alt='' />
            </div>
          </div> */}
          <div className='flex flex-col space-y-5 text-xl w-full px-5 font-light'>
            <p className='text-xl text-black font-bold'>Giới thiệu sách</p>
            <div className='flex justify-center items-center h-40 bg-gray-100 w-full'>Văn bản</div>
          </div>
        </div>
      </div>

      <div className='flex flex-col px-10 mt-6 space-y-5 2xl:mt-0'>
        <div className='w-[640px] flex flex-col bg-gray-100 p-4 space-y-4'>
          <p className='text-[32px] font-bold text-black'>Tên sách</p>
          <p className='text-4xl font-bold'>Giá</p>
        </div>

        <InfoCartDetailComponent />

        <div className='w-[640px] flex flex-col bg-gray-100 p-4 space-y-4'>
          <div className='flex flex-col w-full space-y-2 text-xl font-bold text-black'>
            <p>Thông tin sách</p>
            <div className='w-full h-[1px]' content='' />
          </div>
          <div className='flex items-center justify-center h-20 w-full bg-gray-200 text-xl'>Văn bản</div>
        </div>

        <div className='w-[640px] flex flex-col bg-gray-100 p-4 space-y-4'>
          <div className='flex flex-col w-full space-y-2 text-xl font-bold text-black'>
            <p className='font-bold text-black'>Mô tả sản phẩm</p>
            <div className='w-full h-[1px]' content='' />
          </div>
          <p
            className={`flex justify-center items-center text-xl bg-gray-200 h-20 text-center ${
              !isShowMoreText ? 'line-clamp-3' : 'animate-fade-down'
            }`}
          >
            {/* Nhờ có Mahiru luôn ở bên, Amane đã dũng cảm đối diện với những hồi ức đau khổ trong quá khứ. Trong chuyến về
            thăm nhà bố mẹ Amane, khi cảm nhận được sự chăm sóc, quan tâm và tình cảm ấm áp từ gia đình, Mahiru thấy rất
            hạnh phúc. Ngắm nhìn cô với nụ cười chan chứayêu thương, Amane một lần nữa củng cố quyết tâm sẽ luôn ở bên
            chăm sóc cô.Vào những ngày cuối mùa hè, cả hai đã cùng mặc yukata đến lễ hội . Dù thật chậm rãi, nhưng cả
            Amane và Mahiru đều dần biết cách thể hiện cảm xúc của mình một cách thẳng thắn hơn, khiến những kí ức mùa
            hè của họ càng trở nên sâu sắc.Đây là câu chuyện tình ngọt ngào với cô gái nhà bên tuy lạnh lùng nhưng thật
            đáng yêu đã được ủng hộ nhiệt tình trên trang Shousetsuka ni Narou.*THIÊN SỨ NHÀ BÊN được xem là cú hit của
            dòng Light Novel rom-com tại thị trường Nhật Bản, với nội dung hài hước - lãng mạn rất được yêu thích. Tác
            phẩm nằm top 10 Kono Light novel ga Sugoi năm 2021, đã bán ra 1,5 triệu bản, được chuyển thể thành manga và
            anime.Số tập: 8+ (on-going) Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào
            loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ
            phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng)..... */}
            Văn bản
          </p>
          {!isShowMoreText && (
            <div className={`flex justify-center w-full`}>
              <p className='hover:cursor-pointer text-black' onClick={() => setIsShowMoreText(!isShowMoreText)}>
                Xem Thêm
              </p>
            </div>
          )}
          {isShowMoreText && (
            <div className={`flex justify-center w-full`}>
              <p className='hover:cursor-pointer text-black' onClick={() => setIsShowMoreText(!isShowMoreText)}>
                Ít lại
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardDetailView
