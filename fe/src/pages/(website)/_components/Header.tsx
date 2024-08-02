

const Header = () => {
  return (
  <header>
  <div className="bg-secondary">
    <div className="container text-center py-2">
      <p className="text-[12px] lg:text-sm text-white">
        LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.
        <span className="pl-4">23:00:00</span>
      </p>
    </div>
  </div>
  <div className="py-4 lg:border-b lg:border-neutral-400">
    <div className="container">
      <div className="flex flex-wrap lg:flex-nowrap justify-between lg:gap-8">
        <div className="order-1 flex items-center space-x-4 lg:-ml-9">
          <button className="lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <a href=''>
            <img srcSet="./assets/images/Logo.jpg 2x"  className="w-[119px] lg:w-full" />
          </a>
        </div>
        <form  className="w-full order-3 lg:order-2 flex gap-2 border-t mt-4 lg:mt-0 border-neutral-400 pt-4 lg:w-auto lg:pt-0 lg:border-0">
          <input type="text" className="py-1 pl-6 pr-1 rounded-full bg-white border border-[#F4F4F4] w-full lg:w-[400px]" placeholder="Search" />
          <button type="submit" className="bg-primary rounded-full w-[58px] lg:w-12 h-12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </form>
        <div className="order-2 lg:order-3 flex items-center gap-2 lg:gap-6 lg:-mr-9">
          <a href='' className="text-sm lg:text-base">Your Account</a> |
          <button className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span className="text-[12px] absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white">1</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="hidden lg:block">
    <div className="container">
      <nav>
        <ul className="lg:flex items-center justify-center space-x-10 text-[#46494F]">
          <li><a href='' className="block py-4">Shop All</a></li>
          <li><a href='' className="block py-4">Flower</a></li>
          <li><a href='' className="block py-4">Edibles</a></li>
          <li><a href='' className="block py-4">Concentrates</a></li>
          <li><a href='' className="block py-4">Mushrooms</a></li>
          <li><a href='' className="block py-4">Promotions/Bundles</a></li>
          <li><a href='' className="block py-4">Support</a></li>
          <li><a href='' className="block py-4">Rewards</a></li>
          <li><a href='' className="block py-4">Blog</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

  )
}

export default Header