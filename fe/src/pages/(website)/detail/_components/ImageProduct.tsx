

const ImageProduct = () => {
  return (
    <section className="imgFixed fixed w-full h-full top-0 left-0 z-30 hidden">
    <div className=" relative w-full h-full">
      <div className="bg-imgFixed absolute  w-full h-full z-10  bg-black bg-opacity-50" />
      <div className="container absolute  w-full left-[50%] translate-x-[-50%] top-10 z-50 lg:w-[1000px]">
        <div className="h-[414px] mb-4 w-full flex justify-center items-center rounded-xl bg-white border border-gray-100 lg:mb-6  lg:h-[550px] relative">
          <img src="./assets/images/product1.png" className=" w-[240px] h-[240px] lg:w-[470px] lg:h-[470px]"  />
          <span className="absolute w-8 h-8 right-4 bottom-4 rounded-full bg-white shadow-sm shadow-gray-200 flex justify-center items-center cursor-pointer lg:w-10 lg:h-10  lg:right-6 lg:bottom-6 hover:bg-black hover:text-white transition duration-500 ease-in-out">
            <span><i className="fa-solid fa-arrow-up-right-from-square" /></span>
          </span>
        </div>
        <div className="w-[272px] flex justify-between lg:mx-auto lg:w-[340px]">
          <div className=" cursor-pointer w-14 h-14 rounded-lg bg-[#F4F4F4] flex justify-center items-center lg:w-16 lg:h-16">
            <img src="./assets/images/product1.png" className="w-10 h-10 lg:w-12 lg:h-12"  />
          </div>
          <div className=" cursor-pointer w-14 h-14 rounded-lg bg-[#F4F4F4] flex justify-center items-center lg:w-16 lg:h-16">
            <img src="./assets/images/product1.png" className="w-10 h-10 lg:w-12 lg:h-12"  />
          </div>
          <div className=" cursor-pointer w-14 h-14 rounded-lg bg-[#F4F4F4] flex justify-center items-center lg:w-16 lg:h-16">
            <img src="./assets/images/product1.png" className="w-10 h-10 lg:w-12 lg:h-12"  />
          </div>
          <div className=" cursor-pointer w-14 h-14 rounded-lg bg-[#F4F4F4] flex justify-center items-center lg:w-16 lg:h-16">
            <img src="./assets/images/product1.png" className="w-10 h-10 lg:w-12 lg:h-12"  />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ImageProduct