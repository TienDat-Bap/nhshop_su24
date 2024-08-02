import React from 'react'
import InforProduct from './_components/InforProduct'
import ImageProduct from './_components/ImageProduct'
import MiniCart from './_components/MiniCart'
import FeaturedProduct from './_components/FeaturedProduct'

const DetailPage = () => {
  return (
    <div>
 <InforProduct />
  {/* Images product start  */}
 <ImageProduct />
  {/* Images product end  */}
  {/* mini cart start */}
  <MiniCart />
  {/* mini cart end */}
  <div className="container lg:px-0">
    <hr className=" my-8  lg:mb-[13px] lg:mt-16" />
  </div>
 <FeaturedProduct />
</div>

  )
}

export default DetailPage