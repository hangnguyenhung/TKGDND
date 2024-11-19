/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { dropDownUserDetailHeaderAtom } from '../store/atom'
import { FaChevronDown, FaRegUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { logInState } from '@/view/screens/LogIn/store/atom'

const UserDropDownComponent: React.FC = () => {
  const navigate = useNavigate()
  const [openDropDown, setOpenDropDown] = useRecoilState(dropDownUserDetailHeaderAtom)
  const setLogIn = useSetRecoilState(logInState)
  return (
    <section
      hidden={openDropDown.open === false}
      style={{
        top: 60,
        right: 16,
        zIndex: 90000,
      }}
      className='absolute  w-40  bg-white z-10  border-[0.5px] shadow-2xl animate-fade-down animate-duration-500'
    >
      <div style={{ zIndex: 90000 }} className='flex flex-col items-start text-black '>
        <div className='w-full hover:bg-gray-100'>
          <button
            onClick={(event) => {
              event.preventDefault()
              setOpenDropDown({ open: false })
              navigate('/user')
            }}
            className='px-4 py-2 font-normal border-gray-400 border-solid rounded '
          >
            Tài khoản
          </button>
        </div>
        <div className='w-full hover:bg-gray-100'>
          <button
            onClick={(event) => {
              event.preventDefault()
              setOpenDropDown({ open: false })
              navigate('/order')
            }}
            className='px-4 py-2 font-normal border-gray-400 border-solid rounded '
          >
            Đơn hàng
          </button>
        </div>
        <div className='w-full hover:bg-gray-100'>
          <button
            onClick={(event) => {
              event.preventDefault()
              localStorage.removeItem('user')
              setLogIn({ state: 'idle', message: null })
            }}
            className='px-4 py-2 font-normal border-gray-400 border-solid rounded '
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </section>
  )
}
const UserDetailHeaderComponent = () => {
  const menuRef = React.useRef<HTMLElement>(null)
  const setOpenDropDown = useSetRecoilState(dropDownUserDetailHeaderAtom)
  const handelOpenDropDown = () => {
    setOpenDropDown((preState) => ({ ...preState, open: !preState.open }))
  }
  React.useLayoutEffect(() => {
    const handleDropDown = (event: any) => {
      if (!menuRef.current || !menuRef.current.contains) return
      if (!menuRef.current.contains(event.target)) {
        setOpenDropDown((preState) => ({ ...preState, open: false }))
      }
    }
    window.document.addEventListener('mousedown', handleDropDown)
    return () => window.document.removeEventListener('mousedown', handleDropDown)
  }, [setOpenDropDown])
  return (
    <section className='relative flex text-black flex-row items-center justify-center px-4 space-x-3' ref={menuRef}>
      <FaRegUserCircle size={32} />
      <button onClick={handelOpenDropDown} className='flex items-center py-2 border-solid rounded-lg 4 border-1'>
        <p className='text-lg font-bold'>Username</p>
      </button>
      <FaChevronDown size={16} />
      <UserDropDownComponent />
    </section>
  )
}

export default UserDetailHeaderComponent
