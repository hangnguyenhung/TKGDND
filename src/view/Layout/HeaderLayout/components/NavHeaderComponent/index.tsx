import { useNavigate } from 'react-router-dom'
import UserDetailHeaderComponent from '../userDropDownComponent'
import { useRecoilState } from 'recoil'
import { logInState } from '@/view/screens/LogIn/store/atom'
import React from 'react'

export const LeftNavHeaderLayoutComponent = () => {
  const navigate = useNavigate()
  return (
    <section className='flex flex-row text-white h-16 justify-center items-center animate-fade-right'>
      <div
        onClick={() => navigate('/home')}
        className='w-32 text-black cursor-pointer h-full text-xl font-medium text-center flex items-center justify-center'
      >
        <p>Trang chủ</p>
      </div>
      <div
        onClick={() => window.scrollTo(0, document.body.scrollHeight)}
        className='w-32 text-black cursor-pointer h-full text-xl font-medium text-center flex items-center justify-center'
      >
        Liên hệ
      </div>
    </section>
  )
}
export const RightNavHeaderLayoutComponent = () => {
  const navigate = useNavigate()
  const [logIn, setLogIn] = useRecoilState(logInState)
  React.useEffect(() => {
    const user = localStorage.getItem('user')
    if (user && JSON.parse(user).username === 'username') setLogIn({ state: 'hasValue', message: null })
  }, [logIn.state])
  return (
    <section className='flex flex-row text-white py-2.5 justify-center items-center px-1.5 animate-fade-left'>
      {logIn.state === 'hasValue' && <UserDetailHeaderComponent />}
      {logIn.state !== 'hasValue' && (
        <>
          <div onClick={() => navigate('/login')} className='w-32 text-black font-medium text-center cursor-pointer'>
            Đăng nhập
          </div>
          <div onClick={() => navigate('/signup')} className='w-32 text-black font-medium text-center cursor-pointer'>
            Đăng ký
          </div>
        </>
      )}
    </section>
  )
}
export const NavHeaderLayoutComponent = () => {
  return (
    <nav className='w-full bg-gray-300 h-16 flex flex-row justify-between'>
      <LeftNavHeaderLayoutComponent />
      <RightNavHeaderLayoutComponent />
    </nav>
  )
}
