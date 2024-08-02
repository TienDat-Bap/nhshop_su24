

const MiniCart = () => {
  return (
    <section className="mini-cart fixed  lg:flex top-full left-0 overflow-hidden lg:left-full lg:top-0 opacity-0 w-full h-full z-30 transition-all duration-500 ease-in-out ">
    {/* background  */}
    <div className="backgroud top-0 left-0 w-full h-full absolute z-10  transition-all duration-300 ease-in-out lg:w-full lg:h-full bg-black bg-opacity-35 lg:static lg:z-auto">
    </div>
    <div className=" w-full lg:w-[592px] h-full relative">
      {/* button close  */}
      <div className="absolute -left-16 top-[50%] translate-y-[-50%] hidden lg:block">
        <button className=" w-10 h-10 rounded-full bg-white flex justify-center items-center text-xl text-center">
          <span><i className="fa-solid fa-chevron-right" /></span>
        </button>
      </div>
      {/* content cart  */}
      <div className=" absolute bottom-0 z-50   w-full h-[80%]  bg-white rounded-t-xl p-6 lg:p-8 lg:scrollbar lg:overflow-y-auto lg:h-full lg:static lg:rounded-none ">
        <div className="relative w-full lg:hidden">
          <span className="left-[50%] translate-x-[-50%] -top-3 absolute w-10 h-1 bg-gray-200 rounded-full z-50 " />
        </div>
        <div className="scrollbar overflow-y-auto lg:overflow-y-visible h-full lg:h-auto">
          <div className="flex justify-between items-center h-[54px] border-b border-b-gray-200 mb-5">
            <h1 className="text-xl/[150%]">Your Cart</h1>
            <span className="text-lg text-[#9D9EA2]">(0)</span>
          </div>
          <div className="mb-5">
            <div className="cart-item border-b border-b-gray-200 mb-5">
              <div className="flex">
                <div className="h-14 w-14 rounded-lg border border-gray-300 overflow-hidden flex-shrink-0 mr-4">
                  <img src="./assets/images/product1.png" className="w-full object-contain"  />
                </div>
                <div className="w-full">
                  <div className="mb-4">
                    <div className="flex justify-between items-center w-auto mb-[6px]">
                      <h3 className="text-base text-[#05422C] w-[166px] lg:w-auto">Mix And Match
                        Shatter/Budder 28g (4 X
                        7G)</h3>
                      <button className="w-7 h-7 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
                        <span>x</span>
                      </button>
                    </div>
                    <div className="flex justify-between items-center w-auto">
                      <div>
                        <span className="text-sm font-light text-[#9D9EA2] mr-3">2x</span>
                        <span className="text-sm/[150%] text-[#717378]">$120</span>
                      </div>
                      <span className="text-sm/[150%] ">$245.00</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center w-auto mb-[6px]">
                      <h5 className="text-sm">Add Integra Pack - 4g</h5>
                      <button className="w-7 h-7 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
                        <span>x</span>
                      </button>
                    </div>
                    <div className="flex justify-between items-center w-auto">
                      <div>
                        <span className="text-sm font-light text-[#9D9EA2] mr-3">2x</span>
                        <span className="text-sm/[150%] text-[#717378]">$120</span>
                      </div>
                      <span className="text-sm/[150%] ">$245.00</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center w-auto mb-[6px]">
                      <h5 className="text-sm">Add Integra Pack - 4g</h5>
                      <button className="w-7 h-7 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
                        <span>x</span>
                      </button>
                    </div>
                    <div className="flex justify-between items-center w-auto">
                      <div>
                        <span className="text-sm font-light text-[#9D9EA2] mr-3">2x</span>
                        <span className="text-sm/[150%] text-[#717378]">$120</span>
                      </div>
                      <span className="text-sm/[150%] ">$245.00</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-t-gray-200 flex justify-between items-center mb-6">
                    <span className="text-sm/[150%] text-[#9D9EA2]">Subtotal</span>
                    <span className="text-sm/[150%]">$245.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-item border-b border-b-gray-200 mb-5">
              <div className="flex">
                <div className="h-14 w-14 rounded-lg border border-gray-300 overflow-hidden flex-shrink-0 mr-4">
                  <img src="./assets/images/product1.png" className="w-full object-contain"  />
                </div>
                <div className="w-full">
                  <div className="mb-4">
                    <div className="flex justify-between items-center w-auto mb-[6px]">
                      <h3 className="text-base text-[#05422C] w-[166px] lg:w-auto">Mix And Match
                        Shatter/Budder 28g (4 X
                        7G)</h3>
                      <button className="w-7 h-7 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
                        <span>x</span>
                      </button>
                    </div>
                    <div className="flex justify-between items-center w-auto">
                      <div>
                        <span className="text-sm font-light text-[#9D9EA2] mr-3">2x</span>
                        <span className="text-sm/[150%] text-[#717378]">$120</span>
                      </div>
                      <span className="text-sm/[150%] ">$245.00</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center w-auto mb-[6px]">
                      <h5 className="text-sm">Add Integra Pack - 4g</h5>
                      <button className="w-7 h-7 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
                        <span>x</span>
                      </button>
                    </div>
                    <div className="flex justify-between items-center w-auto">
                      <div>
                        <span className="text-sm font-light text-[#9D9EA2] mr-3">2x</span>
                        <span className="text-sm/[150%] text-[#717378]">$120</span>
                      </div>
                      <span className="text-sm/[150%] ">$245.00</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center w-auto mb-[6px]">
                      <h5 className="text-sm">Add Integra Pack - 4g</h5>
                      <button className="w-7 h-7 rounded-full border border-gray-300 flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
                        <span>x</span>
                      </button>
                    </div>
                    <div className="flex justify-between items-center w-auto">
                      <div>
                        <span className="text-sm font-light text-[#9D9EA2] mr-3">2x</span>
                        <span className="text-sm/[150%] text-[#717378]">$120</span>
                      </div>
                      <span className="text-sm/[150%] ">$245.00</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-t-gray-200 flex justify-between items-center mb-6">
                    <span className="text-sm/[150%] text-[#9D9EA2]">Subtotal</span>
                    <span className="text-sm/[150%]">$245.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-6 border-b border-t-gray-200 flex justify-between items-center">
              <span className="text-sm/[150%]">Total</span>
              <span className="text-xl/[150%] font-medium text-[#EB2606]">$245.00</span>
            </div>
          </div>
          <button className="btn btn-sm lg:btn-xl mb-5">Check Out</button>
          <hr className="bg-gray-200 mb-5" />
          <div>
            <h5 className="text-[12px]/[150%] text-[#717378] uppercase mb-4">SECURE PAYMENTS PROVIDED BY</h5>
            <div className="flex items-center gap-x-3">
              <div className="rounded-lg border border-gray-200 w-14 h-8 overflow-hidden">
                <img src="./assets/logo/mastercard.png" className="w-full object-contain"  />
              </div>
              <div className="rounded-lg border border-gray-200 w-14 h-8 overflow-hidden">
                <img src="./assets/logo/pay2.png" className="w-full object-contain"  />
              </div>
              <div className="rounded-lg border border-gray-200 w-14 h-8 overflow-hidden">
                <img src="./assets/logo/pay3.png" className="w-full object-contain"  />
              </div>
              <div className="rounded-lg border border-gray-200 w-14 h-8 overflow-hidden">
                <img src="./assets/logo/pay4.png" className="w-full object-contain"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default MiniCart