import React from 'react'
import { useResetRecoilState } from 'recoil'
import { logInState } from '../LogIn/store/atom'
import { useNavigate } from 'react-router-dom'

const UserDetail: React.FC = () => {
  const navigate = useNavigate()
  const [state, setState] = React.useState<'Detail' | 'ChangePassword'>('Detail')
  const resetLogin = useResetRecoilState(logInState)
  return (
    <div className='container flex flex-row px-24 mx-auto mt-20 space-x-12 '>
      <div className='w-[34rem] flex flex-col items-center justify-start bg-gray-100 h-[52.25rem]'>
        <div className='flex flex-col items-center justify-center w-full space-y-4 h-80 '>
          {/* <FaRegUserCircle size={120} color={'#4848A4'} /> */}
          <div className='w-[120px] aspect-square flex items-center justify-center bg-gray-300'>Avatar</div>
          <div className='text-4xl'>Tên</div>
        </div>
        <div className='w-full px-1 pt-1'>
          <button
            onClick={(event) => {
              event.preventDefault()
              setState('Detail')
            }}
            className={`${
              state === 'Detail' ? 'bg-gray-300' : ''
            } w-full p-4 space-y-4 text-base font-medium text-start text-black border-zinc-400`}
          >
            Thông tin cá nhân
          </button>
        </div>
        <div className='w-full px-1 pt-1'>
          <button
            onClick={(event) => {
              event.preventDefault()
              setState('ChangePassword')
            }}
            className={`${
              state === 'ChangePassword' ? 'bg-gray-300' : ''
            } w-full p-4 space-y-4 text-base font-medium text-start text-black border-zinc-400`}
          >
            Đổi mật khẩu
          </button>
        </div>
        <div className='flex items-end w-full text-black grow'>
          <div
            onClick={() => {
              resetLogin()
              navigate('/home')
            }}
            className='hover:cursor-pointer w-full p-4 flex flex-row border-t-[1px] items-center space-x-2 text-xl font-bold bg-gray-300'
          >
            <p>Đăng xuất</p>
          </div>
        </div>
      </div>

      {state === 'Detail' && (
        <div className='flex flex-col w-full bg-gray-100 p-4 space-y-12'>
          <div className='text-2xl '>Thông tin cá nhân</div>
          <form action='' className='flex flex-col w-full space-y-4 font-light'>
            <div className='flex flex-row w-full space-x-4'>
              <div className='flex flex-col space-y-4 grow'>
                <div className='text-base'>Họ</div>
                <input type='text' className='w-full p-2 bg-gray-300' />
              </div>
              <div className='flex flex-col space-y-4 grow'>
                <div className='text-base'>Tên</div>
                <input type='text' className='w-full p-2 bg-gray-300' />
              </div>
            </div>

            <div className='flex flex-row w-full space-x-4'>
              <div className='flex flex-col space-y-4 grow'>
                <div className='text-base'>Địa chỉ email</div>
                <input type='text' className='w-full p-2 bg-gray-300' />
              </div>
            </div>

            <div className='flex flex-row w-full space-x-4'>
              <div className='flex flex-col space-y-4 grow'>
                <div className='text-base'>Số điện thoại</div>
                <input type='text' className='w-full p-2 bg-gray-300' />
              </div>
              <div className='flex flex-col space-y-4 grow'>
                <div className='text-base'>Ngày sinh</div>
                <input type='text' className='w-full p-2 bg-gray-300' />
              </div>
            </div>
          </form>
          {/* <div className='text-base font-light'>
            Để đơn hàng được giải quyết dễ dàng, hãy điền đầy đủ thông tin của bạn cho chúng tôi nhé!
          </div> */}
          <div className='flex flex-row space-x-12 text-xl'>
            <button className='py-3 w-[10.75rem] bg-gray-300'>Huỷ</button>
            <button className='py-3 w-[10.75rem] bg-gray-300'>Lưu</button>
          </div>
        </div>
      )}
      {state === 'ChangePassword' && (
        <div className='flex flex-col w-full space-y-12 bg-gray-100 p-4'>
          <div className='text-2xl'>Đổi mật khẩu</div>
          <form action='' className='flex flex-col w-full space-y-4 font-light'>
            <div className='flex flex-row w-full space-x-4'>
              <div className='flex flex-col space-y-4 grow'>
                <div className='text-base'>Mật khẩu mới</div>
                <div className='w-full flex items-center flex-row bg-gray-300'>
                  {/* <input type={`${isShowPassword ? 'text' : 'password'}`} className='grow' />
                  {isShowPassword ? (
                    <div onClick={() => setIsShowPassword(false)}>
                      <FaEyeLowVision />
                    </div>
                  ) : (
                    <div onClick={() => setIsShowPassword(true)}>
                      <FaEye />
                    </div>
                  )} */}
                  <input type='text' className='w-full p-2 bg-gray-300' />
                </div>
              </div>
            </div>
            <div className='flex flex-row w-full space-x-4'>
              <div className='flex flex-col space-y-4 grow'>
                <div className='text-base'>Nhập lại mật khẩu</div>
                <div className='w-full bg-gray-300'>
                  {/* <input type='password' className='w-full' /> */}
                  <input type='text' className='w-full p-2 bg-gray-300' />
                </div>
              </div>
            </div>
          </form>
          {/* <div className='text-base font-light'>
            Sử dụng tối thiểu 8 ký tự, và tối đa 15 ký tự. Chỉ bao gồm số, chữ thường, chữ in hoa và ký tự đặc biệt
          </div> */}
          <div className='flex flex-row space-x-12 text-xl'>
            <button className='py-3 w-[10.75rem] bg-gray-300'>Huỷ</button>
            <button className='py-3 w-[10.75rem] bg-gray-300'>Lưu</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDetail
