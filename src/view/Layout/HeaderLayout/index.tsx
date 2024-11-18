import { Advertisement } from './components/Advertisement'
import { ContentHeaderComponent } from './components/ContentHeaderComponent'
import { NavHeaderLayoutComponent } from './components/NavHeaderComponent'
import { SubNavHeaderComponent } from './components/SubNavHeaderComponent'

export const HeaderLayout = () => {
  return (
    <header className='flex flex-col w-screen bg-slate-400'>
      <Advertisement />
      <NavHeaderLayoutComponent />
      <ContentHeaderComponent />
      <SubNavHeaderComponent />
    </header>
  )
}
