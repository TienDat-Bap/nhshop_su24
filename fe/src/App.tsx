import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/(website)/home/Homepage'
import LayoutWebSite from './pages/(website)/LayoutWebSite'
import LayoutAdmin from './pages/(dashboard)/LayoutAdmin'
import DashBoard from './pages/(dashboard)/dashboard/DashBoard'
import ListProduct from './pages/(dashboard)/product/ListProduct'
import ProductPage from './pages/(website)/product/ProductPage'
import DetailPage from './pages/(website)/detail/DetailPage'
function App() {
  return (
  <>
     <Routes>
        <Route path='/' element={<LayoutWebSite />}>
            <Route index element={<Homepage />} />
            <Route path='products' element={<ProductPage />} />
            <Route path='product-detail' element={<DetailPage />} />
        </Route>
        <Route path='admin' element={<LayoutAdmin />}>
            <Route index element={<DashBoard />} />
            <Route path='products' element={<ListProduct />}/>
        </Route>
      </Routes>
  </>
  )
}

export default App
