import { NotificationContentHeaderComponent } from '../ContentHeaderComponent/components'

export const Advertisement = () => {
  return (
    <section className='flex flex-row justify-between items-center h-16 px-10 w-full py-2 text-sm bg-white shadow-lg border-b'>
      <div className='flex gap-4 text-xl'>Banner quảng cáo</div>
      <NotificationContentHeaderComponent />
    </section>
  )
}
