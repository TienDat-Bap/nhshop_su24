
import ServiceProduct from './components/ServiceProduct'
import SidebarProduct from './components/SidebarProduct'
import MainProduct from './components/MainProduct'

const ProductPage = () => {
  return (
    <>
    <ServiceProduct />
      <div>
      
        <section className="mb-[232px] lg:mb-[336px]">
          <div className="lg:container lg:mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 ">
             <SidebarProduct />
              <MainProduct />
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default ProductPage