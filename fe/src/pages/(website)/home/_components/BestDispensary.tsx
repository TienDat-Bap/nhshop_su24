import { useEffect } from "react"
import Swiper from "swiper";
import bgProduct from '../../../../assets/images/bgProduct.png'
import product1 from '../../../../assets/images/product1.png'
const fake = [
    'he',
    'hee',
    'he',
    'he',
    'he',
    'he',
]
const BestDispensary = () => {

    useEffect(()=>{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const swiperOptions: any = {
            slidesPerView: "auto",
            spaceBetween: 30,
            centeredSlides: true,
            breakpoints: {
              768: {
                centeredSlides: false,
              },
            },
          };
      
          const swiper = new Swiper(".best-seller", swiperOptions);
      
          // Cleanup Swiper instance on unmount
          return () => {
            swiper.destroy(true, true);
          };
    },[])
    return (
        <section className="py-[64px] lg:py-[120px]">
            <div className="container">
                <div className="mb-[32px] lg:mb-[64px]">
                    <h2 className="main-title uppercase text-center">
                        BEST DISPENSARY TO BUY <br className="hidden lg:block" />
                        WEED ONLINE IN CANADA
                    </h2>
                </div>
                <div>
                    <div className="tabs lg:mb-[64px]">
                        <ul className="lg:grid grid-cols-3 gap-8">
                            <li>
                                <a href='' className="block h-[40px] leading-[40px] lg:h-[48px] lg:leading-[48px] text-center text-sm lg:text-base border border-[#05422C] rounded-full hover:bg-[#F2F6F4] transition ease-in-out duration-500">Best Sellers</a>
                            </li>
                            <li>
                                <a href='' className="block h-[40px] leading-[40px] lg:h-[48px] lg:leading-[48px] text-center text-sm lg:text-base border border-[#05422C] rounded-full hover:bg-[#F2F6F4] transition ease-in-out duration-500">Bundles &amp; Promotions</a>
                            </li>
                            <li>
                                <a href='' className="block h-[40px] leading-[40px] lg:h-[48px] lg:leading-[48px] text-center text-sm lg:text-base border border-[#05422C] rounded-full hover:bg-[#F2F6F4] transition ease-in-out duration-500">On Sale</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tabs-content">
                        <div className="grid grid-cols-12 gap-8">
                            <div className="col-span-12 lg:col-span-4">
                                <div className="bg-secondary text-center rounded-2xl px-10 py-[35px] lg:py-[122px]">
                                    <div className="mb-5">
                                        <img src={product1} className="mx-auto" />
                                    </div>
                                    <h3 className="mb-5">
                                        <a href='' className="text-xl text-white">Shop our Best Sellers</a>
                                    </h3>
                                    <p className="mb-5 text-sm text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum
                                        varius lorem blandit lectus magnis feugiat.
                                    </p>
                                    <a href='' className="text-sm text-[#17AF26] underline">View All</a>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-8">
                                <div className="swiper best-seller">
                                    <div className="swiper-wrapper">
                                    {fake.map((item,i) => (
                                        <div key={i} className="swiper-slide max-w-[291px]">
                                            <div className={`h-[180px] lg:h-[240px] flex items-center justify-center bg-[url('${bgProduct}')] rounded-lg bg-cover bg-center bg-no-repeat`}>
                                                <img src={product1}  />
                                            </div>
                                            <div className="product-content text-center py-5">
                                                <a  className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
                                                <h3 className="mb-4">
                                                    <a  className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                                                        Shatter/Budder 28g (4 X
                                                        7G)</a>
                                                </h3>
                                                <div className="rating mb-4">
                                                    <span>4.6/5 | 135</span>
                                                    <a  className="text-[#C8C9CB]">Reviews</a>
                                                </div>
                                                <span className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg">Indica
                                                    70%</span>
                                                <div className="mb-4">
                                                    <span className="text-[#EB2606]">$200.00</span>
                                                    <span className="text-[#C8C9CB] text-base">/gram</span>
                                                </div>
                                                <ul className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded  *:py-[3.5px] *:px-1 *:lg:py-2 *:lg:px-3">
                                                    <li>28g</li>
                                                    <li>1/2lb</li>
                                                    <li>1/4lb</li>
                                                </ul>
                                                <a  className="btn">Add To Cart</a>
                                            </div>
                                        </div>
                                    ))}
                                        
                                     
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BestDispensary