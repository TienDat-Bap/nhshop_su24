

const Footer = () => {
  return (
   <footer className="relative">
  <div className="absolute top-[-176px] lg:left-[50%] lg:translate-x-[-50%] lg:top-[-208px]">
    <div className="container z-10 ">
      <div className="w-full lg:flex-row lg:items-center rounded-3xl px-6 py-10 lg:p-16 lg:min-h-[342px] bg-[#05422C] bg-cover bg-no-repeat bg-center ">
        <h1 className="main-title text-white lg:w-[789px] mb-4 lg:mb-6">UNLOCK 20% OFF YOUR FIRST ORDER</h1>
        <p className="text-[#C3D2CC] text-sm pb-0 lg:pb-8 lg:text-[20px]/[150%] border-b border-b-gray-200 lg:mb-8">Reveal coupon code by entering your email</p>
        <form className="flex flex-col gap-4  lg:items-center lg:flex-row lg:gap-8 lg:justify-between">
          <input type="text" className="px-11 py-6 w-full  bg-transparent border border-gray-200 rounded-full text-white outline-0" placeholder="Email Address" />
          <button type="submit" className="py-6 w-full px-10 text-left lg:w-auto bg-[#17AF26] rounded-full text-white whitespace-nowrap">Reveal coupon</button>
        </form>
      </div>
    </div>
  </div>
  <div className="bg-[#01100B] z-0 ">
    <div className="container">
      <div className="pt-[240px] lg:pt-[380px] pb-16">
        <div className="flex flex-col lg:flex-row gap-8 pb-16 mb-10 border-b border-b-gray-200">
          <div className="max-w-[379px] pr-[66px] lg:pr-[103px]">
            <div className="mb-6">
              <img src="./assets/images/logo-footer.png"  />
            </div>
            <p className="text-[#9D9EA2] text-base">#1 Canadian top rated online dispensary that meets the customers
              needs in every single medical marijuana aspect. The team here at TopShelfBC is
              heavily involved in the Canadian cannabis industry for over 15 years. We strive
              to provide the top quality products,
              service and care at the lowest prices you’ll ever find.</p>
          </div>
          <div className="w-full">
            <div className="mb-10">
              <h1 className="font-medium text-[20px]/[150%] text-white mb-6">QUICK LINK</h1>
              <div className="grid grid-cols-2 gap-6 lg:gap-8">
                <ul className="flex flex-col gap-4 *:text-sm text-[#9D9EA2]">
                  <li><a href="#">Track Your Order</a></li>
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">Flower</a></li>
                  <li><a href="#">Edibles</a></li>
                  <li><a href="#">Concentrates</a></li>
                  <li><a href="#">Refunds</a></li>
                </ul>
                <ul className="flex flex-col gap-4 *:text-sm text-[#9D9EA2]">
                  <li><a href="#">Mushrooms</a></li>
                  <li><a href="#">Promotions / Bundles</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Reward</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Shipping Faq</a></li>
                </ul>
              </div>
            </div>
            <div className="mb-10">
              <h1 className="font-medium text-[20px]/[150%] text-white mb-6">CONTACT US</h1>
              <ul className="flex flex-col gap-4 *:text-sm text-[#9D9EA2]">
                <li><a href="#">info@topshelfbc.cc</a></li>
              </ul>
            </div>
            <div className="mb-10">
              <h1 className="font-medium text-[20px]/[150%] text-white mb-6">MORE</h1>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <ul className="flex flex-col gap-4 *:text-sm text-[#9D9EA2]">
                  <li><a href="#">Buy weed online in Canada</a></li>
                  <li><a href="#">Buy weed online in New Brunswick</a></li>
                  <li><a href="#">Buy weed online in Prince Edward Island</a></li>
                  <li><a href="#">Buy weed online in Northwest Territories</a></li>
                  <li><a href="#">Buy weed online in Saskatchewan</a></li>
                </ul>
                <ul className="flex flex-col gap-4 *:text-sm text-[#9D9EA2]">
                  <li><a href="#">Buy weed online in Manitoba</a></li>
                  <li><a href="#">Buy weed online in Quitebec</a></li>
                  <li><a href="#">Buy weed online in British Columbia</a></li>
                  <li><a href="#">Buy weed online in Ontario</a></li>
                  <li><a href="#">Buy weed online in Alberta</a></li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-8 rounded-md overflow-hidden">
                <img src="./assets/logo/mastercard.png" className="object-cover w-full"  />
              </div>
              <div className="w-14 h-8 rounded-md overflow-hidden">
                <img src="./assets/logo/pay2.png" className="object-cover w-full"  />
              </div>
              <div className="w-14 h-8 rounded-md overflow-hidden">
                <img src="./assets/logo/pay3.png" className="object-cover w-full"  />
              </div>
              <div className="w-14 h-8 rounded-md overflow-hidden">
                <img src="./assets/logo/pay4.png" className="object-cover w-full"  />
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#717378] flex gap-10 flex-col-reverse lg:flex-row justify-between items-center">
          <p>© 2022 Top Shelf BC. All Rights Reserved. </p>
          <div className="flex items-center gap-4 lg:gap-8">
            <p>Out Of Stock</p>
            <p>Privacy Policy</p>
            <p>Terms &amp; Conditions</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer