
import Header from './_components/Header'
import Footer from './_components/Footer'
import { Outlet } from 'react-router-dom'

const LayoutWebSite = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutWebSite