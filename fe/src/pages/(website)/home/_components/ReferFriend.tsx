import bgRefer from '../../../../assets/images/bgRefer.png'

const ReferFriend = () => {
  return (
   <section>
  <div className="flex flex-col ">
    <div className="container z-10 ">
      <div className={`w-full flex flex-col lg:flex-row justify-between lg:items-center rounded-3xl px-6 py-10 lg:px-[120px] lg:py-24 lg:min-h-[342px] bg-[url("${bgRefer}")] bg-cover bg-no-repeat bg-center`}>
        <div>
          <h1 className="main-title text-white">REFER A FRIENDS</h1>
          <p className="text-white text-[20px]/[150%] font-medium lg:text-[32px]/[150%] lg:-tracking-[0.5px] mt-3">And get<span className="text-[#F2BC1B] text-[18px]/[150%] lg:text-[32px] font-semibold ml-[24px]">$30!</span></p>
        </div>
        <a href="#" className="btn-xl">Refer Here</a>
      </div>
    </div>
    <div className="bg-[#01100B] z-0 -mt-[132px] lg:-mt-[166px]">
      <div className="container">
        <h1 className="w-[342px]  mx-auto main-title pt-[183px] mb-4 lg:w-[948px] lg:mb-6 lg:pt-[296px] text-center text-white">HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL  ORDER MARIJUANA</h1>
        <p className="w-[342px] text-sm lg:w-[790px] lg:text-base text-[#9D9EA2] mx-auto text-center mb-[73px]">Ordering weed online from Top Shelf BC is easy. We are proud to have made the process accessible across multiple platforms and simple to understand, meaning that more people can come to us to buy their cannabis products online.</p>
        <div className=" lg:px-[52px] grid grid-cols-2 gap-6  mb-10 lg:mb-20 lg:gap-8">
          <div className="lg:mb-8">
            <div className=" w-full lg:w-[300px] mx-auto flex justify-center items-center relative mb-4 lg:mb-6">
              <span className="absolute top-0 left-0 w-7 h-7 text-sm bg-[#F2BC1B] lg:w-10 lg:h-10 rounded-full flex justify-center items-center lg:text-base">1</span>
              <div className=" w-16 h-16 lg:w-[144px] lg:h-[144px]">
                <img src="./assets/icon/icon1.png" className="object-cover w-full"  />
              </div>
            </div>
            <h3 className="text-white uppercase font-medium text-lg lg:text-2xl text-center mb-4 lg:mb-6">Register</h3>
            <p className="text-center text-[#9D9EA2] text-sm lg:text-base">Sign up for an account with us. This is quick and simple. We don’t require any more details from you than the bare minimum needed for you to place an order and get your product delivered.</p>
          </div>
          <div className="lg:mb-8">
            <div className=" w-full lg:w-[300px] mx-auto flex justify-center items-center relative mb-4 lg:mb-6">
              <span className="absolute top-0 left-0 w-7 h-7 text-sm bg-[#F2BC1B] lg:w-10 lg:h-10 rounded-full flex justify-center items-center lg:text-base">2</span>
              <div className=" w-16 h-16 lg:w-[144px] lg:h-[144px]">
                <img src="./assets/icon/icon2.png" className="object-cover w-full"  />
              </div>
            </div>
            <h3 className="text-white uppercase font-medium text-lg lg:text-2xl text-center mb-4 lg:mb-6">Shop</h3>
            <p className="text-center text-[#9D9EA2] text-sm lg:text-base">Decide on what you want to purchase. We stock a wide range of edibles,flowers , concentrates and mushrooms there is bound to be something for everyone.</p>
          </div>
          <div>
            <div className=" w-full lg:w-[300px] mx-auto flex justify-center items-center relative mb-4 lg:mb-6">
              <span className="absolute top-0 left-0 w-7 h-7 text-sm bg-[#F2BC1B] lg:w-10 lg:h-10 rounded-full flex justify-center items-center lg:text-base">3</span>
              <div className=" w-16 h-16 lg:w-[144px] lg:h-[144px]">
                <img src="./assets/icon/icon3.png" className="object-cover w-full"  />
              </div>
            </div>
            <h3 className="text-white uppercase font-medium text-lg lg:text-2xl text-center mb-4 lg:mb-6">MAKE PAYMENT</h3>
            <p className="text-center text-[#9D9EA2] text-sm lg:text-base">Pay securely. Our site boasts sturdy protection certificates to keep your card details and related data safe.</p>
          </div>
          <div>
            <div className=" w-full lg:w-[300px] mx-auto flex justify-center items-center relative mb-4 lg:mb-6">
              <span className="absolute top-0 left-0 w-7 h-7 text-sm bg-[#F2BC1B] lg:w-10 lg:h-10 rounded-full flex justify-center items-center lg:text-base">4</span>
              <div className=" w-16 h-16 lg:w-[144px] lg:h-[144px]">
                <img src="./assets/icon/icon4.png" className="object-cover w-full"  />
              </div>
            </div>
            <h3 className="text-white uppercase font-medium text-lg lg:text-2xl text-center mb-4 lg:mb-6">RELAX</h3>
            <p className="text-center text-[#9D9EA2] text-sm lg:text-base">Your product will be packaged discretely and shipped by Canada Post Xpresspost. We will provide you with a tracking number so then you can follow your mail order marijuana every step of the way.</p>
          </div>
        </div>
        <a href="#" className="btn-xl mx-auto hidden mb-28 lg:block">Choose your Weed</a>
        <a href="#" className="mb-16 block btn-xl mx-auto lg:hidden">Refer Here</a>
      </div>
    </div>
  </div>
</section>

  )
}

export default ReferFriend