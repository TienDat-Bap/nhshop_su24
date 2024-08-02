
const ServiceProduct = () => {
  return (
    <section className="bg-[#F2F6F4] mb-4 lg:mb-10">
    <div className="container">
      <div className=" grid grid-cols-3 gap-10 lg:gap-16 py-6">
        <div className="w-full flex flex-col gap-2 lg:items-center lg:flex-row lg:gap-4">
          <div className="w-8 h-8 lg:w-12 lg:h-12 flex justify-center items-center rounded-full bg-white">
            <img src="./assets/icon/service2.png" />
          </div>
          <h3 className=" text-[14px]/[150%] font-normal lg:font-medium lg:text-[20px]/[150%]">Reliable Shipping
          </h3>
        </div>
        <div className="w-full flex flex-col gap-2 relative lg:items-center  lg:flex-row lg:gap-4">
          <div className="absolute -left-[20px] top-0 bottom-0 lg:flex lg:items-center lg:-left-8">
            <span className="block w-px h-6 lg:h-full bg-[#C3D2CC]" />
          </div>
          <div className="w-8 h-8 lg:w-12 lg:h-12 flex justify-center items-center rounded-full bg-white">
            <img src="./assets/icon/service3.png" />
          </div>
          <h3 className=" text-[14px]/[150%] font-normal lg:font-medium lg:text-[20px]/[150%]">You’re Safe With Us
          </h3>
          <div className="absolute -right-[20px] top-0 bottom-0 lg:flex lg:items-center lg:-right-8">
            <span className="block w-px  h-6 lg:h-full bg-[#C3D2CC]" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 lg:items-center lg:flex-row lg:gap-4">
          <div className="w-8 h-8 lg:w-12 lg:h-12 flex justify-center items-center rounded-full bg-white">
            <img src="./assets/icon/service4.png" />
          </div>
          <h3 className=" text-[14px]/[150%] font-normal lg:font-medium lg:text-[20px]/[150%]">Best Quality &amp;
            Pricing</h3>
        </div>
      </div>
    </div>
    </section>
  )
}

export default ServiceProduct