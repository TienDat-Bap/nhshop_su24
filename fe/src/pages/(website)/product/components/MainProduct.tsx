import { useEffect } from "react";





const MainProduct = () => {
    useEffect(() => {
         new Swiper(".myTopsell", {
            slidesPerView: 3,
            spaceBetween: 32,
            centeredSlides: true,
            navigation: {
                nextEl: ".topsell-next",
                prevEl: ".topsell-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    centeredSlides: false,
                  },
                  0: {
                    slidesPerView: 1.5,
                    centeredSlides: true,
                  },
            },
        });
        
         new Swiper(".myPanel", {
            slidesPerView: "auto",
            spaceBetween: 30,
            centeredSlides: true,
            navigation: {
                nextEl: ".panel-next",
                prevEl: ".panel-prev",
            },
            pagination: {
                el: ".swiper-pagination",
              },
              mousewheel: true,
              keyboard: true,
            breakpoints: {
                768: {
                    centeredSlides: false,
                },
            },
        });
    }, []);
  return (
    <div className="lg:col-span-9">
    <section className="container lg:max-w-full lg:p-0">
      <div className=" mb-6  h-[50px] -tracking-[1.5px] border-b border-b-[#F4F4F4] flex justify-between items-center lg:mb-8 lg:h-[68px]">
        <h5 className="mt-[5px] text-base lg:text-2xl lg:mt-1">Shop</h5>
        <div>
          <select className="px-[14px] h-[34px] mr-[10px] rounded-full border border-[#F4F4F4] lg:hidden">
            <option value='' className=" text-[12px]/[150%] text-[#1A1E26]">Filters</option>
          </select>
          <select className="px-[14px] h-[34px] rounded-full border border-[#F4F4F4] lg:h-11 lg:px-5">
            <option value='' className=" text-[12px]/[150%] lg:text-sm text-[#1A1E26]">Short By
              Lates</option>
            <option value='' className=" text-[12px]/[150%] lg:text-sm text-[#1A1E26]">Short By
              Lates</option>
            <option value='' className=" text-[12px]/[150%] lg:text-sm text-[#1A1E26]">Short By
              Lates</option>
            <option value='' className=" text-[12px]/[150%] lg:text-sm text-[#1A1E26]">Short By
              Lates</option>
          </select>
        </div>
      </div>
    </section>
    <section className="container  lg:max-w-full lg:p-0">
      <div className="mb-6  lg:mb-8">
        <h1 className="text-[#17AF26] text-base font-medium lg:text-[20px]/[150%] mb-4">Cannabis</h1>
        <p className="text-base text-[#717378] max-w-[864px] ">
          Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and
          Sativa medical cannabis strain selections at the best prices online. You can be assured
          that all
          our strains go through a strict screening process to ensure that all your
          cannabis needs are top-quality. All of our flowers are sourced from reputable growers,
          based in British Columbia, Canada. We have hige grade selection comes from growers
          that produce AAAA+ quality cannabis flowers and have many years of experience in the
          cannabis
          industry. You are guaranteed to be receiving high-quality flowers at the best prices
          online with our unbeatable sales!
        </p>
      </div>
    </section>
    <section>
      <div className="mb-6  lg:mb-8 bg-[#F2F6F4] lg:rounded-2xl">
        <div className="lg:px-8">
          <h1 className="px-8 text-[#060709] font-medium text-2xl tracking-[-0.5px] py-6 lg:px-0">Top
            Selling</h1>
          <div className="swiper myTopsell">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="h-[180px] lg:h-[240px] flex items-center justify-center bg-[url('./assets/images/bgProduct-mobile.png')] lg:bg-white lg:bg-[url('')]  rounded-lg bg-cover bg-center bg-no-repeat">
                  <img src="./assets/images/product1.png"  />
                </div>
                <div className="product-content text-center py-5">
                  <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
                  <h3 className="mb-4">
                    <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                      Shatter/Budder 28g (4 X
                      7G)</a>
                  </h3>
                  <div className="rating mb-4">
                    <span>4.6/5 | 135</span>
                    <a href='' className="text-[#C8C9CB]">Reviews</a>
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
                  <a href='' className="btn">Add To Cart</a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="h-[180px] lg:h-[240px] flex items-center justify-center bg-[url('./assets/images/bgProduct-mobile.png')] lg:bg-white lg:bg-[url('')]  rounded-lg bg-cover bg-center bg-no-repeat">
                  <img src="./assets/images/product1.png"  />
                </div>
                <div className="product-content text-center py-5">
                  <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
                  <h3 className="mb-4">
                    <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                      Shatter/Budder 28g (4 X
                      7G)</a>
                  </h3>
                  <div className="rating mb-4">
                    <span>4.6/5 | 135</span>
                    <a href='' className="text-[#C8C9CB]">Reviews</a>
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
                  <a href='' className="btn">Add To Cart</a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="h-[180px] lg:h-[240px] flex items-center justify-center bg-[url('./assets/images/bgProduct-mobile.png')] lg:bg-white lg:bg-[url('')]  rounded-lg bg-cover bg-center bg-no-repeat">
                  <img src="./assets/images/product1.png"  />
                </div>
                <div className="product-content text-center py-5">
                  <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
                  <h3 className="mb-4">
                    <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                      Shatter/Budder 28g (4 X
                      7G)</a>
                  </h3>
                  <div className="rating mb-4">
                    <span>4.6/5 | 135</span>
                    <a href='' className="text-[#C8C9CB]">Reviews</a>
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
                  <a href='' className="btn">Add To Cart</a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="h-[180px] lg:h-[240px] flex items-center justify-center bg-[url('./assets/images/bgProduct-mobile.png')] lg:bg-white lg:bg-[url('')]  rounded-lg bg-cover bg-center bg-no-repeat">
                  <img src="./assets/images/product1.png"  />
                </div>
                <div className="product-content text-center py-5">
                  <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
                  <h3 className="mb-4">
                    <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                      Shatter/Budder 28g (4 X
                      7G)</a>
                  </h3>
                  <div className="rating mb-4">
                    <span>4.6/5 | 135</span>
                    <a href='' className="text-[#C8C9CB]">Reviews</a>
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
                  <a href='' className="btn">Add To Cart</a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="h-[180px] lg:h-[240px] flex items-center justify-center bg-[url('./assets/images/bgProduct-mobile.png')] lg:bg-white lg:bg-[url('')]  rounded-lg bg-cover bg-center bg-no-repeat">
                  <img src="./assets/images/product1.png"  />
                </div>
                <div className="product-content text-center py-5">
                  <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
                  <h3 className="mb-4">
                    <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                      Shatter/Budder 28g (4 X
                      7G)</a>
                  </h3>
                  <div className="rating mb-4">
                    <span>4.6/5 | 135</span>
                    <a href='' className="text-[#C8C9CB]">Reviews</a>
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
                  <a href='' className="btn">Add To Cart</a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="h-[180px] lg:h-[240px] flex items-center justify-center bg-[url('./assets/images/bgProduct-mobile.png')] lg:bg-white lg:bg-[url('')]  rounded-lg bg-cover bg-center bg-no-repeat">
                  <img src="./assets/images/product1.png"  />
                </div>
                <div className="product-content text-center py-5">
                  <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
                  <h3 className="mb-4">
                    <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                      Shatter/Budder 28g (4 X
                      7G)</a>
                  </h3>
                  <div className="rating mb-4">
                    <span>4.6/5 | 135</span>
                    <a href='' className="text-[#C8C9CB]">Reviews</a>
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
                  <a href='' className="btn">Add To Cart</a>
                </div>
              </div>
            </div>
            <div className="swiper-button-next topsell-next flex items-center justify-center w-10 h-10 rounded-full bg-white">
              <span className="text-black">
                <i className="fa-solid fa-chevron-right" />
              </span>
            </div>
            <div className="swiper-button-prev topsell-prev flex items-center justify-center w-10 h-10 rounded-full bg-white">
              <span className="text-black">
                <i className="fa-solid fa-chevron-left" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container lg:max-w-full lg:p-0">
      <div className=" mb-10 grid grid-cols-2 gap-6 lg:grid-cols-3 lg:mb-16 lg:gap-8">
        <div className="swiper-slide">
          <div className="h-[180px] flex items-center justify-center bg-[#F4F4F4]  rounded-lg bg-cover bg-center bg-no-repeat lg:h-[240px]">
            <img src="./assets/images/product1.png"  />
          </div>
          <div className="product-content text-center py-5">
            <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
            <h3 className="mb-4">
              <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                Shatter/Budder 28g (4 X
                7G)</a>
            </h3>
            <div className="rating mb-4">
              <span>4.6/5 | 135</span>
              <a href='' className="text-[#C8C9CB]">Reviews</a>
            </div>
            <span className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg">Indica 70%</span>
            <div className="mb-4">
              <span className="text-[#EB2606]">$200.00</span>
              <span className="text-[#C8C9CB] text-base">/gram</span>
            </div>
            <ul className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded *:py-[3.5px] *:px-1 *:lg:py-2 *:lg:px-3">
              <li>28g</li>
              <li>1/2lb</li>
              <li>1/4lb</li>
            </ul>
            <a href='' className="btn">Add To Cart</a>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="h-[180px] flex items-center justify-center bg-[#F4F4F4]  rounded-lg bg-cover bg-center bg-no-repeat lg:h-[240px]">
            <img src="./assets/images/product1.png"  />
          </div>
          <div className="product-content text-center py-5">
            <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
            <h3 className="mb-4">
              <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                Shatter/Budder 28g (4 X
                7G)</a>
            </h3>
            <div className="rating mb-4">
              <span>4.6/5 | 135</span>
              <a href='' className="text-[#C8C9CB]">Reviews</a>
            </div>
            <span className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg">Indica 70%</span>
            <div className="mb-4">
              <span className="text-[#EB2606]">$200.00</span>
              <span className="text-[#C8C9CB] text-base">/gram</span>
            </div>
            <ul className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded *:py-[3.5px] *:px-1 *:lg:py-2 *:lg:px-3">
              <li>28g</li>
              <li>1/2lb</li>
              <li>1/4lb</li>
            </ul>
            <a href='' className="btn">Add To Cart</a>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="h-[180px] flex items-center justify-center bg-[#F4F4F4]  rounded-lg bg-cover bg-center bg-no-repeat lg:h-[240px]">
            <img src="./assets/images/product1.png"  />
          </div>
          <div className="product-content text-center py-5">
            <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
            <h3 className="mb-4">
              <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                Shatter/Budder 28g (4 X
                7G)</a>
            </h3>
            <div className="rating mb-4">
              <span>4.6/5 | 135</span>
              <a href='' className="text-[#C8C9CB]">Reviews</a>
            </div>
            <span className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg">Indica 70%</span>
            <div className="mb-4">
              <span className="text-[#EB2606]">$200.00</span>
              <span className="text-[#C8C9CB] text-base">/gram</span>
            </div>
            <ul className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded *:py-[3.5px] *:px-1 *:lg:py-2 *:lg:px-3">
              <li>28g</li>
              <li>1/2lb</li>
              <li>1/4lb</li>
            </ul>
            <a href='' className="btn">Add To Cart</a>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="h-[180px] flex items-center justify-center bg-[#F4F4F4]  rounded-lg bg-cover bg-center bg-no-repeat lg:h-[240px]">
            <img src="./assets/images/product1.png"  />
          </div>
          <div className="product-content text-center py-5">
            <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
            <h3 className="mb-4">
              <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                Shatter/Budder 28g (4 X
                7G)</a>
            </h3>
            <div className="rating mb-4">
              <span>4.6/5 | 135</span>
              <a href='' className="text-[#C8C9CB]">Reviews</a>
            </div>
            <span className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg">Indica 70%</span>
            <div className="mb-4">
              <span className="text-[#EB2606]">$200.00</span>
              <span className="text-[#C8C9CB] text-base">/gram</span>
            </div>
            <ul className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded *:py-[3.5px] *:px-1 *:lg:py-2 *:lg:px-3">
              <li>28g</li>
              <li>1/2lb</li>
              <li>1/4lb</li>
            </ul>
            <a href='' className="btn">Add To Cart</a>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="h-[180px] flex items-center justify-center bg-[#F4F4F4]  rounded-lg bg-cover bg-center bg-no-repeat lg:h-[240px]">
            <img src="./assets/images/product1.png"  />
          </div>
          <div className="product-content text-center py-5">
            <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
            <h3 className="mb-4">
              <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                Shatter/Budder 28g (4 X
                7G)</a>
            </h3>
            <div className="rating mb-4">
              <span>4.6/5 | 135</span>
              <a href='' className="text-[#C8C9CB]">Reviews</a>
            </div>
            <span className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg">Indica 70%</span>
            <div className="mb-4">
              <span className="text-[#EB2606]">$200.00</span>
              <span className="text-[#C8C9CB] text-base">/gram</span>
            </div>
            <ul className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded *:py-[3.5px] *:px-1 *:lg:py-2 *:lg:px-3">
              <li>28g</li>
              <li>1/2lb</li>
              <li>1/4lb</li>
            </ul>
            <a href='' className="btn">Add To Cart</a>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="h-[180px] flex items-center justify-center bg-[#F4F4F4]  rounded-lg bg-cover bg-center bg-no-repeat lg:h-[240px]">
            <img src="./assets/images/product1.png"  />
          </div>
          <div className="product-content text-center py-5">
            <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
            <h3 className="mb-4">
              <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                Shatter/Budder 28g (4 X
                7G)</a>
            </h3>
            <div className="rating mb-4">
              <span>4.6/5 | 135</span>
              <a href='' className="text-[#C8C9CB]">Reviews</a>
            </div>
            <span className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg">Indica 70%</span>
            <div className="mb-4">
              <span className="text-[#EB2606]">$200.00</span>
              <span className="text-[#C8C9CB] text-base">/gram</span>
            </div>
            <ul className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded *:py-[3.5px] *:px-1 *:lg:py-2 *:lg:px-3">
              <li>28g</li>
              <li>1/2lb</li>
              <li>1/4lb</li>
            </ul>
            <a href='' className="btn">Add To Cart</a>
          </div>
        </div>
      </div>
    </section>
    <section className="mb-10 py-6  flex flex-col gap-10  bg-[url('./assets/images/bg-Pannel.png')] bg-center bg-no-repeat bg-cover lg:rounded-3xl lg:py-14 lg:flex-row lg:justify-between lg:gap-0 lg:mb-16">
      <div className="w-[341px] mx-auto lg:ml-14">
        <h4 className="text-sm tracking-[4px] mb-4 text-white text-opacity-[30%]">CONCENTRATES</h4>
        <h1 className="text-[32px]/[120%] tracking-[-1.5px] mb-8 font-semibold text-white">Mix And Match
          Shatter/Budder 28g
          (4 X 7G)
        </h1>
        <div className="flex items-center gap-2 mb-6">
          <span className="flex items-center gap-[6px]">
            <span>
              <img src="./assets/icon/star.png"  />
            </span>
            <span className="text-sm text-white">4.6/5</span>
          </span>
          <span className="h-3 w-px bg-gray-400" />
          <span className="flex items-center gap-[6px]">
            <span className="text-sm text-white">135</span>
            <span className="text-sm text-white text-opacity-25">Reviews</span>
          </span>
        </div>
        <div className="flex items-center gap-2 mb-8">
          <button className="border-white border-opacity-20 bg-white bg-opacity-[8%] rounded px-[10px] py-[7px] text-[12px]/[150%] text-white">28g</button>
          <button className="border-white border-opacity-20 bg-white bg-opacity-[8%] rounded px-[10px] py-[7px] text-[12px]/[150%] text-white">1/2lb</button>
          <button className="border-white border-opacity-20 bg-white bg-opacity-[8%] rounded px-[10px] py-[7px] text-[12px]/[150%] text-white">1/4lb</button>
        </div>
        <div className="flex justify-between items-center">
          <button className="rounded-full outline-none border-none bg-[#17AF26] text-white text-base font-medium whitespace-nowrap px-10 py-4">Add
            to Cart</button>
          <span className="flex items-center gap-2">
            <span className="text-[20px]/[150%] text-[#F2BC1B]">$102.00</span>
            <span className="text-sm text-white text-opacity-60 line-through">$102.00</span>
          </span>
        </div>
      </div>
      <div className=" lg:mr-7 relative lg:px-7 overflow-hidden">
        <div className="swiper myPanel w-[373px] h-[350px] z-0 rounded-2xl ">
          <div className="swiper-wrapper">
            <div className="swiper-slide bg-white bg-opacity-[12%] w-full h-[322px] flex items-center justify-center rounded-2xl">
              <img src="./assets/images/product2.png"  />
            </div>
            <div className="swiper-slide bg-white bg-opacity-[12%] w-full h-[322px] flex items-center justify-center rounded-2xl">
              <img src="./assets/images/product2.png"  />
            </div>
            <div className="swiper-slide bg-white bg-opacity-[12%] w-full h-[322px] flex items-center justify-center rounded-2xl">
              <img src="./assets/images/product2.png"  />
            </div>
            <div className="swiper-slide bg-white bg-opacity-[12%] w-full h-[322px] flex items-center justify-center rounded-2xl">
              <img src="./assets/images/product2.png"  />
            </div>
            <div className="swiper-slide bg-white bg-opacity-[12%] w-full h-[322px] flex items-center justify-center rounded-2xl">
              <img src="./assets/images/product2.png"  />
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
        <div className="swiper-button-next panel-next absolute flex items-center justify-center w-10 h-10 rounded-full bg-white">
          <span className="text-black">
            <i className="fa-solid fa-chevron-right" />
          </span>
        </div>
        <div className="swiper-button-prev panel-prev absolute flex items-center justify-center w-10 h-10 rounded-full bg-white ">
          <span className="text-black">
            <i className="fa-solid fa-chevron-left" />
          </span>
        </div>
      </div>
    </section>
    <section className="container lg:max-w-full lg:p-0  mb-6 lg:mb-8">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-8">
        <div className="swiper-slide">
          <div className="h-[180px] flex items-center justify-center bg-[#F4F4F4]  rounded-lg bg-cover bg-center bg-no-repeat lg:h-[240px]">
            <img src="./assets/images/product1.png"  />
          </div>
          <div className="product-content text-center py-5">
            <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
            <h3 className="mb-4">
              <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                Shatter/Budder 28g (4 X
                7G)</a>
            </h3>
            <div className="rating mb-4">
              <span>4.6/5 | 135</span>
              <a href='' className="text-[#C8C9CB]">Reviews</a>
            </div>
            <span className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg">Indica 70%</span>
            <div className="mb-4">
              <span className="text-[#EB2606]">$200.00</span>
              <span className="text-[#C8C9CB] text-base">/gram</span>
            </div>
            <ul className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded *:py-[3.5px] *:px-1 *:lg:py-2 *:lg:px-3">
              <li>28g</li>
              <li>1/2lb</li>
              <li>1/4lb</li>
            </ul>
            <a href='' className="btn">Add To Cart</a>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="h-[180px] flex items-center justify-center bg-[#F4F4F4]  rounded-lg bg-cover bg-center bg-no-repeat lg:h-[240px]">
            <img src="./assets/images/product1.png"  />
          </div>
          <div className="product-content text-center py-5">
            <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
            <h3 className="mb-4">
              <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                Shatter/Budder 28g (4 X
                7G)</a>
            </h3>
            <div className="rating mb-4">
              <span>4.6/5 | 135</span>
              <a href='' className="text-[#C8C9CB]">Reviews</a>
            </div>
            <span className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg">Indica 70%</span>
            <div className="mb-4">
              <span className="text-[#EB2606]">$200.00</span>
              <span className="text-[#C8C9CB] text-base">/gram</span>
            </div>
            <ul className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded *:py-[3.5px] *:px-1 *:lg:py-2 *:lg:px-3">
              <li>28g</li>
              <li>1/2lb</li>
              <li>1/4lb</li>
            </ul>
            <a href='' className="btn">Add To Cart</a>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="h-[180px] flex items-center justify-center bg-[#F4F4F4]  rounded-lg bg-cover bg-center bg-no-repeat lg:h-[240px]">
            <img src="./assets/images/product1.png"  />
          </div>
          <div className="product-content text-center py-5">
            <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
            <h3 className="mb-4">
              <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                Shatter/Budder 28g (4 X
                7G)</a>
            </h3>
            <div className="rating mb-4">
              <span>4.6/5 | 135</span>
              <a href='' className="text-[#C8C9CB]">Reviews</a>
            </div>
            <span className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg">Indica 70%</span>
            <div className="mb-4">
              <span className="text-[#EB2606]">$200.00</span>
              <span className="text-[#C8C9CB] text-base">/gram</span>
            </div>
            <ul className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded *:py-[3.5px] *:px-1 *:lg:py-2 *:lg:px-3">
              <li>28g</li>
              <li>1/2lb</li>
              <li>1/4lb</li>
            </ul>
            <a href='' className="btn">Add To Cart</a>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="h-[180px] flex items-center justify-center bg-[#F4F4F4]  rounded-lg bg-cover bg-center bg-no-repeat lg:h-[240px]">
            <img src="./assets/images/product1.png"  />
          </div>
          <div className="product-content text-center py-5">
            <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
            <h3 className="mb-4">
              <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                Shatter/Budder 28g (4 X
                7G)</a>
            </h3>
            <div className="rating mb-4">
              <span>4.6/5 | 135</span>
              <a href='' className="text-[#C8C9CB]">Reviews</a>
            </div>
            <span className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg">Indica 70%</span>
            <div className="mb-4">
              <span className="text-[#EB2606]">$200.00</span>
              <span className="text-[#C8C9CB] text-base">/gram</span>
            </div>
            <ul className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded *:py-[3.5px] *:px-1 *:lg:py-2 *:lg:px-3">
              <li>28g</li>
              <li>1/2lb</li>
              <li>1/4lb</li>
            </ul>
            <a href='' className="btn">Add To Cart</a>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="h-[180px] flex items-center justify-center bg-[#F4F4F4]  rounded-lg bg-cover bg-center bg-no-repeat lg:h-[240px]">
            <img src="./assets/images/product1.png"  />
          </div>
          <div className="product-content text-center py-5">
            <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
            <h3 className="mb-4">
              <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                Shatter/Budder 28g (4 X
                7G)</a>
            </h3>
            <div className="rating mb-4">
              <span>4.6/5 | 135</span>
              <a href='' className="text-[#C8C9CB]">Reviews</a>
            </div>
            <span className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg">Indica 70%</span>
            <div className="mb-4">
              <span className="text-[#EB2606]">$200.00</span>
              <span className="text-[#C8C9CB] text-base">/gram</span>
            </div>
            <ul className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded *:py-[3.5px] *:px-1 *:lg:py-2 *:lg:px-3">
              <li>28g</li>
              <li>1/2lb</li>
              <li>1/4lb</li>
            </ul>
            <a href='' className="btn">Add To Cart</a>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="h-[180px] flex items-center justify-center bg-[#F4F4F4]  rounded-lg bg-cover bg-center bg-no-repeat lg:h-[240px]">
            <img src="./assets/images/product1.png"  />
          </div>
          <div className="product-content text-center py-5">
            <a href='' className="block mb-2 text-[12px]/[150%] lg:text-sm font-light text-[#9D9EA2] uppercase">CONCENTRATES</a>
            <h3 className="mb-4">
              <a href='' className="text-base lg:text-lg text-[#1A1E26]">Mix And Match
                Shatter/Budder 28g (4 X
                7G)</a>
            </h3>
            <div className="rating mb-4">
              <span>4.6/5 | 135</span>
              <a href='' className="text-[#C8C9CB]">Reviews</a>
            </div>
            <span className="inline-block mb-3 bg-[#F2F6F4] py-2 px-4 rounded-lg">Indica 70%</span>
            <div className="mb-4">
              <span className="text-[#EB2606]">$200.00</span>
              <span className="text-[#C8C9CB] text-base">/gram</span>
            </div>
            <ul className="mb-4 flex space-x-3 items-center justify-center *:border *:rounded *:py-[3.5px] *:px-1 *:lg:py-2 *:lg:px-3">
              <li>28g</li>
              <li>1/2lb</li>
              <li>1/4lb</li>
            </ul>
            <a href='' className="btn">Add To Cart</a>
          </div>
        </div>
      </div>
    </section>
    <section className="container lg:max-w-full lg:px-0 flex flex-col gap-5 pt-6 border-t border-t-[#F4F4F4] lg:flex-row lg:justify-between lg:items-center lg:gap-0">
      <p className="text-sm text-[#717378] font-light">Showing 1-30 of 393 results</p>
      <div className="flex items-center gap-2 lg:gap-3">
        <a href="#">
          <button className="text-[12px]/[150%] lg:text-sm w-8 h-8 lg:w-9 lg:h-9 rounded-full  border hover:bg-[#F2F6F4] mr-2 lg:mr-0"> <i className="fa-solid fa-chevron-left" /></button>
        </a>
        <a href="#">
          <button className="text-[12px]/[150%] lg:text-sm w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#F2F6F4]">1</button>
        </a>
        <a href="#">
          <button className="text-[12px]/[150%] lg:text-sm w-8 h-8 lg:w-9 lg:h-9 rounded-full hover:bg-[#F2F6F4]">2</button>
        </a>
        <a href="#">
          <button className="text-[12px]/[150%] lg:text-sm w-8 h-8 lg:w-9 lg:h-9 rounded-full  hover:bg-[#F2F6F4]">3</button>
        </a>
        <a href="#">
          <button className="text-[12px]/[150%] lg:text-sm w-8 h-8 lg:w-9 lg:h-9 rounded-full  hover:bg-[#F2F6F4]">4</button>
        </a>
        <p>...</p>
        <a href="#">
          <button className="text-[12px]/[150%] lg:text-sm w-8 h-8 lg:w-9 lg:h-9 rounded-full  hover:bg-[#F2F6F4]">5</button>
        </a>
        <a href="#">
          <button className="text-[12px]/[150%] lg:text-sm w-8 h-8 lg:w-9 lg:h-9 rounded-full border hover:bg-[#F2F6F4]  ml-2 lg:ml-0"> <i className="fa-solid fa-chevron-right" /></button>
        </a>
      </div>
    </section>
  </div>
  )
}

export default MainProduct