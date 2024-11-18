import { SearchContentHeaderComponent } from './components'

export const ContentHeaderComponent = () => {
  return (
    <article className=' flex items-center justify-between px-10 py-2 bg-white justify-items-center'>
      <div className='w-[150px] h-10 flex items-center col-span-2 bg-gray-200 animate-rotate-x'>
        <p className='mx-auto font-bold'>LOGO</p>
      </div>
      <SearchContentHeaderComponent />
    </article>
  )
}
