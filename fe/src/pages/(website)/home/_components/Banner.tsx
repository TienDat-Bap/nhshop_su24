
const Banner = () => {
  return (
   <section className="bg-[url('./assets/images/banner-mobile.jpg')] lg:bg-[url('./assets/images/banner-desktop2.png')] bg-no-repeat bg-cover bg-center text-white min-h-[720px] flex py-10 lg:items-center lg:py-0">
  <div className="container">
    <div className="lg:w-2/3">
      <span className="block text-[#F2BC1B] tracking-[4px] text-sm lg:mb-5 lg:text-base">BEST SELLER</span>
      <h1 className="text-[32px]/[120%] lg:mb-5 lg:text-[64px]/[110%] -tracking-[1.5px] lg:-tracking-[4px]">
        BEST DISPENSARY TO BUY WEED ONLINE
      </h1>
      <a href='' className="block text-lg/[150%] lg:mb-10 lg:text-2xl/[150%] tracking-">Vitamins &amp; Supplements</a>
      <div className="mb-5">
        <span className="text-lg/[150%] lg:mb-5 lg:text-2xl/[150%]">Get 25% off</span><span>Free Shipping</span>
      </div>
      <a href='' className="btn lg:btn-lg">Shop All</a>
    </div>
  </div>
</section>

  )
}

export default Banner