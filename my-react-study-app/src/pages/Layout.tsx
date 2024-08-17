import { Outlet } from 'react-router'
import Header from '../widgets/Header/Header'
import './Layout.css'

function Layout() {
  
    return (
      <>
        <Header />
        <main className='main'>
            <Outlet/>
        </main>
      </>
    )
}
  
export default Layout
  