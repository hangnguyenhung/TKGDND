import React from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const SearchContentHeaderComponent = () => {
  const navigate = useNavigate()
  const [textInput, setTextInput] = React.useState<string | null>(null)
  return (
    <section className='flex items-center justify-center gap-4'>
      <div className=' flex items-center justify-between w-[300px] bg-gray-100 py-2 px-4 border-solid'>
        <input
          placeholder='Tìm kiếm '
          type='text'
          value={textInput || ''}
          onChange={(event) => {
            setTextInput(event.target.value)
          }}
          className='bg-gray-100'
          onSubmit={() => navigate(`/search?q=${textInput}`)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') navigate(`/search?q=${textInput}`)
          }}
        />
        <button onClick={() => navigate(`/search?q=${textInput}`)}>
          <FaSearch className='text-gray-400' />
        </button>
      </div>
      <FaShoppingCart
        className=' cursor-pointer'
        onClick={() => {
          // navigate('/cart')
          navigate('/cart')
        }}
        size={44}
        color={'#9ca3af'}
      />
    </section>
  )
}
