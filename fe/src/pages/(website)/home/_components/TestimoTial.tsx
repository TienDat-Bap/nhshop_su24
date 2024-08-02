import { useEffect } from "react"
import Swiper from "swiper";
const fake = [
    'he',
    'hee',
    'he',
    'he',
    'he',
    'he',
]
const TestimoTial = () => {
   
    useEffect(()=>{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const swiperOptions: any = {
            slidesPerView: "auto",
            spaceBetween: 30,
            centeredSlides: true,
            navigation: {
             nextEl: ".swiper-testimonials-button-next",
             prevEl: ".swiper-testimonials-button-prev",
            },
             breakpoints: {
             768: {
                 centeredSlides: false,
             },
         },
          };
      
          const swiper = new Swiper(".testimonials", swiperOptions);
      
          // Cleanup Swiper instance on unmount
          return () => {
            swiper.destroy(true, true);
          };
    },[])
  
   
  return (
   <section className="py-[64px] lg:pb-[120px] lg:pt-0">
  <div className="container">
    <div className="mb-[32px] lg:mb-[64px]">
      <h2 className="main-title uppercase">CUSTOMER TESTIMONIALS</h2>
    </div>
    <div>
      <div className="tabs-content">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-secondary rounded-2xl px-10 py-[35px] lg:py-[52px]">
              <div className="mb-5">
                <h3 className="text-[32px]/[120%] -tracking-[1.5px] text-white font-semibold">
                  VOTED BEST ONLINE DISPENSARY IN CANADA
                </h3>
              </div>
              <hr className="border border-[#346654] my-5" />
              <a href=""><img src="./assets/icon/google.svg"  /></a>
              <span className="text-white block mt-10">EXELLENCET</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 relative">
            <div  className="swiper testimonials">
              <div className="swiper-wrapper">
                {fake.map((item)=>(
                     <div key={item} className="swiper-slide w-[291px] h-[395px] border border-gray-200 rounded-lg p-10">
                     <div className="border-b border-gray-300 pb-5 mb-5 flex items-center space-x-5">
                       <img src="https://picsum.photos/36/36"  className="rounded-full" />
                       <h4>Vikki Starr</h4>
                     </div>
                     <div>
                       <div className="my-rating" data-rating="2.5" />
                     </div>
                     <p className="mt-5">
                       A affordable on any budget and such fast delivery,
                       straight to my door! I recommend them to all my
                       friends and family for their 420 needs.
                     </p>
                     <span className="text-sm text-[#9D9EA2] block mt-4">January 15, 2023</span>
                   </div>
                ))}
                
              </div>
            </div>
            <div  className="swiper-button-next swiper-testimonials-button-next" />
            <div  className="swiper-button-prev swiper-testimonials-button-prev" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default TestimoTial