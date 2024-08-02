import { useEffect } from "react"

const InforProduct = () => {
    useEffect(()=>{
          // Mini cart
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const addtocart:any = document.querySelector('.add-to-cart')
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const minicart:any = document.querySelector('.mini-cart')
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const backgroudMiniCart:any = document.querySelector('.backgroud')
          // Kiểm tra kích thước màn hình
          addtocart.addEventListener('click', () => {
              const isMobile = window.matchMedia("(max-width: 768px)").matches;
              console.log(isMobile)
              if (isMobile) {
                  minicart.style.top = '0';
                  minicart.style.opacity = '1'
                  console.log("Ok")
              } else {
                  minicart.style.left = '0';
                  minicart.style.opacity = '1'
              }
          })
          backgroudMiniCart.addEventListener('click', () => {
              const isMobile = window.matchMedia("(max-width: 768px)").matches;
              if (isMobile) {
                  minicart.style.top = '100%';
                  minicart.style.opacity = '0';
                  backgroudMiniCart.style.display = 'hidden'
              } else {
                  minicart.style.left = '100%';
                  minicart.style.opacity = '0';
              }
          })
  
  
          // Image fixed
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const main_img:any = document.querySelector('.main-img')
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const bg_imgFixed:any = document.querySelector('.bg-imgFixed')
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const imgFixed:any = document.querySelector('.imgFixed')
          main_img.addEventListener('click', () => {
              imgFixed.classList.remove('hidden')
          })
          bg_imgFixed.addEventListener('click', () => {
              imgFixed.classList.add('hidden')
          })
  
          //Tabs
          const btn_tabs = document.querySelectorAll('.btn-tabs button')
          const content_tabs = document.querySelectorAll('.content-tabs .content')
          btn_tabs.forEach((btn_tab, index)=>{
              btn_tab.addEventListener('click', ()=>{
                  btn_tabs.forEach((btn_tab)=>{
                      btn_tab.classList.remove('active')
                  })
                  btn_tab.classList.add('active')
                  const i = index
                  onBlockContent(i)
              })
          })
          const onBlockContent = (i:number)=>{
              content_tabs.forEach((content_tab)=>{
                  content_tab.classList.remove('active')
              })
              content_tabs[i].classList.add('active')
          }
          
    },[])
    return (
        <section className="mt-10">
            <div className="container lg:px-0">
                <div className="flex flex-col gap-10 lg:justify-between lg:flex-row lg:gap-0">
                    <div className="w-full lg:w-[573px]">
                        <div className=" h-[342px] mb-4 w-full flex justify-center items-center rounded-xl bg-white border border-gray-100 lg:mb-6  lg:h-[520px] relative">
                            <img src="./assets/images/product1.png" className=" w-[240px] h-[240px] lg:w-[400px] lg:h-[400px]"  />
                            <span className="main-img absolute w-8 h-8 right-4 bottom-4 rounded-full bg-white shadow-sm shadow-gray-200 flex justify-center items-center cursor-pointer lg:w-10 lg:h-10  lg:right-6 lg:bottom-6 hover:bg-black hover:text-white transition duration-500 ease-in-out">
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
                    <div className="w-full lg:w-[640px]">
                        <h4 className="mb-3 text-[12px]/[150%] tracking-[2px] lg:text-sm lg:tracking-wide lg:mb-4 text-[#9D9EA2]">
                            CONCENTRATES</h4>
                        <h1 className=" mb-3 text-xl tracking-normal font-medium lg:font-semibold lg:text-[32px]/[120%] lg:tracking-[-1.5px] lg:mb-4 ">
                            Mix And Match Shatter/Budder 28g
                            (4 X 7G)
                        </h1>
                        <div className="mb-3 flex items-center gap-8 lg:mb-4">
                            <button className="px-[10px] h-7 rounded-lg bg-[#F2F6F4] text-center text-[12px]/[150%] text-[#05422C] hover:bg-[#05422C] hover:text-white transition duration-500 ease-in-out  lg:px-4 lg:h-9">
                                Indica
                            </button>
                            <button className="px-[10px] h-7 rounded-lg bg-[#F2F6F4] text-center text-[12px]/[150%] text-[#05422C] hover:bg-[#05422C] hover:text-white transition duration-500 ease-in-out  lg:px-4 lg:h-9">
                                Sativa 100%
                            </button>
                        </div>
                        <div className="mb-5 flex items-center justify-between">
                            <div className="flex items-center gap-2 lg:gap-3">
                                <span className="text-sm lg:text-base line-through text-[#9D9EA2]">$200.00</span>
                                <span className=" text-base lg:text-[20px]/[150%] font-medium text-[#EB2606]">$120.0</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="flex items-center gap-[6px]">
                                        <span>
                                            <img src="./assets/icon/star.png"  />
                                        </span>
                                        <span className="text-base ">4.6/5</span>
                                    </span>
                                    <span className="h-3 w-px bg-gray-400" />
                                    <span className="flex items-center gap-[6px]">
                                        <span className="text-base">135</span>
                                        <span className="text-sm text-[#9D9EA2]">Reviews</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-5 py-5 px-5 border border-gray-100 rounded-xl lg:px-6 flex flex-col gap-5">
                            <div className="flex gap-4">
                                <div className="h-8 w-8 flex items-center justify-center">
                                    <img src="./assets/icon/icon-effect.jpg"   />
                                </div>
                                <div className="max-w-[254px] lg:max-w-[542px]">
                                    <p className="font-light text-[12px]/[150%] text-[#717378] tracking-[1px] uppercase mb-2">
                                        MAY RELIEVE</p>
                                    <span className="text-sm">Anxiety, Arthritis, Chronic Pain, Depression, Fatigue,
                                        Inflammation, Insomnia, Irregular Bowel Movements, Migraines, Mood Swings</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-8 w-8 flex items-center justify-center">
                                    <img src="./assets/icon/icon-effect.jpg"   />
                                </div>
                                <div className=" max-w-[254px] lg:max-w-[542px]">
                                    <p className="font-light text-[12px]/[150%] text-[#717378] tracking-[1px] uppercase mb-2">
                                        MAY RELIEVE</p>
                                    <span className="text-sm">Anxiety, Arthritis, Chronic Pain, Depression, Fatigue,
                                        Inflammation, Insomnia, Irregular Bowel Movements, Migraines, Mood Swings</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-8 w-8 flex items-center justify-center">
                                    <img src="./assets/icon/icon-effect.jpg"   />
                                </div>
                                <div className=" max-w-[254px] lg:max-w-[542px]">
                                    <p className="font-light text-[12px]/[150%] text-[#717378] tracking-[1px] uppercase mb-2">
                                        MAY RELIEVE</p>
                                    <span className="text-sm">Anxiety, Arthritis, Chronic Pain, Depression, Fatigue,
                                        Inflammation, Insomnia, Irregular Bowel Movements, Migraines, Mood Swings</span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5 pb-6 border-b border-b-gray-100">
                            <h1 className="font-light text-[12px]/[150%] text-[#717378] tracking-[1px] uppercase mb-2">
                                DESCRIPTION</h1>
                            <p className="text-sm text-[#46494F]">Jungle Diamonds is a slightly indica dominant hybrid strain
                                (60% indica/40% sativa) created through crossing the infamous Slurricane X Gorilla Glue #4
                                strains.</p>
                        </div>
                        <div className="mb-5">
                            <div className="grid mb-4 grid-cols-1 lg:grid-cols-2 gap-6 lg:mb-6">
                                <div>
                                    <h1 className="font-light text-[12px]/[150%] text-[#717378] tracking-[1px] uppercase mb-3">
                                        WEIGHT</h1>
                                    <div className="flex items-center gap-3">
                                        <button className="border border-[#17AF26] px-[14px] h-9 bg-[#F3FBF4] text-[12]/[150%] rounded">28g</button>
                                        <button className="px-[14px] h-9 bg-[#F4F4F4] text-[12]/[150%] rounded">1/2lb</button>
                                        <button className="px-[14px] h-9 bg-[#F4F4F4] text-[12]/[150%] rounded">1/4lb</button>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="font-light text-[12px]/[150%] text-[#717378] tracking-[1px] uppercase mb-3">
                                        Add Integra Pack</h1>
                                    <div className="flex items-center gap-8">
                                        <label htmlFor="peer" className=" flex items-center gap-[10px] py-[7px] cursor-pointer">
                                            <input type="checkbox" className=" accent-[#17AF26] w-[22px] h-[22px]" name="peer" id="peer" />
                                            <label htmlFor="peer" className="text-sm font-normal ">4g (+$2.00)</label>
                                        </label>
                                        <label htmlFor="peer2" className=" flex items-center gap-[10px] py-[7px] cursor-pointer">
                                            <input type="checkbox" className=" accent-[#17AF26] w-[22px] h-[22px]" name="peer" id="peer2" />
                                            <label htmlFor="peer2" className="text-sm font-normal ">4g (+$2.00)</label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <span className=" text-sm max-w-[342px] px-[14px] text-center py-[8px] rounded-full bg-[#FEF8E8] whitespace-nowrap lg:max-w-max">
                                    Purchase this product now and earn <span className="text-[#EB2606]">80</span> Points!
                                </span>
                            </div>
                        </div>
                        <div className="mb-5 p-5 lg:p-6 border border-gray-100 rounded-2xl">
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm">Khalifa Kush (AAAA)</span>
                                        <span className="text-sm text-[#9D9EA2]">2x</span>
                                    </div>
                                    <span className="text-sm">$120.00</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm">Add Integra Pack - 4g</span>
                                        <span className="text-sm text-[#9D9EA2]" />
                                    </div>
                                    <span className="text-sm">$2.00</span>
                                </div>
                            </div>
                            <div className="mb-6 flex flex-col gap-4  py-5 border-y border-gray-100 lg:items-center lg:flex-row lg:justify-between lg:gap-0">
                                <div className="w-max px-4 py-[10px] flex items-center divide-x divide-gray-200 border border-gray-100 rounded-[10px]">
                                    <div className="flex items-center pr-4">
                                        <button className="w-9 h-9 rounded text-[12px]/[150%]">-</button>
                                        <input type="text" className="text-center text-[12px]/[150%] w-9 h-9 rounded bg-[#F4F4F4] outline-0 border-none" defaultValue={1} />
                                        <button className="w-9 h-9 rounded text-[12px]/[150%]">+</button>
                                    </div>
                                    <p className="text-[12px]/[150%] text-[#17AF26] pl-4">In stock</p>
                                </div>
                                <button className="w-max bg-[#17AF26] rounded-full h-14 px-8 add-to-cart">
                                    <div className="flex items-center gap-4 ">
                                        <span className="font-medium text-base text-white ">Add to Cart</span>
                                        <span className="w-px h-3 bg-white" />
                                        <span className="font-medium text-base text-white">$242.00</span>
                                    </div>
                                </button>
                            </div>
                            <div className=" *:mb-2">
                                <span className="flex items-center gap-2 ">
                                    <span className="w-4 h-4 rounded-full border border-green-500 flex justify-center items-center text-green-500 text-[12px]">
                                        <i className="fa-solid fa-check" />
                                    </span>
                                    <span className="text-sm">Free Xpress Shipping on orders over <span className="text-[#F2BC1B]">$149</span></span>
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 rounded-full border border-green-500 flex justify-center items-center text-green-500 text-[12px]">
                                        <i className="fa-solid fa-check" />
                                    </span>
                                    <span className="text-sm">Free Xpress Shipping on orders over <span className="text-[#F2BC1B]">$149</span></span>
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 rounded-full border border-green-500 flex justify-center items-center text-green-500 text-[12px]">
                                        <i className="fa-solid fa-check" />
                                    </span>
                                    <span className="text-sm">Free Xpress Shipping on orders over <span className="text-[#F2BC1B]">$149</span></span>
                                </span>
                            </div>
                        </div>
                        <div className="mb-8 pt-4 grid grid-cols-1 gap-3 border-t border-t-gray-100 lg:grid-cols-2 lg:gap-8 lg:pt-6 lg:mb-10">
                            <div className="flex items-center gap-3">
                                <p className="min-w-[92px] font-light text-[12px]/[150%] tracking-[1px]">Sku</p>
                                <span className="font-light text-[12px]/[150%]">:</span>
                                <span className="text-sm">N/A</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="min-w-[92px] font-light text-[12px]/[150%] tracking-[1px]">Categories</p>
                                <span className="font-light text-[12px]/[150%]">:</span>
                                <span className="text-sm text-green-500">
                                    AAAA Weed, Indica
                                </span>
                            </div>
                        </div>
                        <hr className="mb-8 lg:mb-10 border-gray-300" />
                        <div className=" btn-tabs mb-6 flex justify-between items-center pb-5 lg:pb-6 border-b border-b-gray-200">
                            <button className="border border-gray-200 rounded-full w-[106px] h-8 text-[12px]/[150%]  font-medium text-[#46494F] active lg:w-[197px] lg:h-12 lg:text-base hover:active">Desription</button>
                            <button className="border border-gray-200 rounded-full  w-[106px] h-8 text-[12px]/[150%] font-medium text-[#46494F]  lg:w-[197px] lg:h-12 lg:text-base  hover:active">Reviews
                                <span className="lg:text-sm font-normal text-[#9D9EA2]">(350)</span></button>
                            <button className="border border-gray-200 rounded-full  w-[106px] h-8 text-[12px]/[150%] font-medium text-[#46494F]  lg:w-[197px] lg:h-12 lg:text-base  hover:active">Refer
                                a Friend</button>
                        </div>
                        <div className="content-tabs">
                            <div className="content hidden active">
                                <p className="text-sm text-[#46494F] mb-4">Jungle Diamonds is a slightly indica dominant hybrid
                                    strain (60% indica/40% sativa) created through crossing the infamous Slurricane X
                                    Gorilla
                                    Glue #4 strains. Named for its gorgeous appearance and breeder, Jungle Diamonds is a
                                    favorite of indica and hybrid lovers alike thanks to its delicious taste and tingly,
                                    arousing high. Jungle Diamonds buds have sparkling oversized spade-shaped olive green
                                    nugs
                                    with vivid amber hairs and a thick frosty blanket of glittering tiny blue-tinted white
                                    crystal trichomes. As you pull apart each sticky little nugget, aromas of spicy mocha
                                    coffee
                                    and fruity herbs are released. </p>
                                <p className="text-sm text-[#46494F]">The flavor is of sweet chocolate with hints of fresh ripe
                                    berries to it, too. The Jungle Diamonds high is just as delicious, with happy effects
                                    that
                                    will boost the spirits and kick negative thoughts and moods to the curb. You’ll feel a
                                    tingly sense in your body from start to finish that serves to remove any aches or pains
                                    while leaving you pretty aroused at times. This is accompanied by a blissfully unfocused
                                    heady lift that leaves your head in the clouds without causing sedation. With these
                                    effects
                                    and its pretty high 17-24% THC level, Jungle Diamonds is ideal for experienced patients
                                    with
                                    chronic pain, cramps or muscle spasms and appetite loss or nausea.</p>
                            </div>
                            <div className="content hidden">
                                {/* show comment */}
                                <div className="mb-6">
                                    <div className="scrollbar flex flex-col gap-5 h-[400px] lg:h-[467px] overflow-y-auto mb-5">
                                        <div className="border border-gray-200 rounded-2xl p-5 lg:p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="w-9 h-9 rounded-full flex-shrink-0 overflow-hidden mr-4">
                                                    <img src="./assets/images/avatars/avt1.jpg" className="object-contain w-full "  />
                                                </div>
                                                <h5 className="text-base text-[#1A1E26] mr-8">JungKook</h5>
                                                <p className="text-sm font-light text-tertiary">January 15, 2023</p>
                                            </div>
                                            <hr className="bg-neutral-400 mb-4" />
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-gray-300">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-base text-[#1A1E26]">Absolutely love TopShelfBC; affordable
                                                    on any budget and such fast
                                                    delivery, straight to my door! I recommend them to all my friends and
                                                    family for their 420 needs.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="border border-gray-200 rounded-2xl p-5 lg:p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="w-9 h-9 rounded-full flex-shrink-0 overflow-hidden mr-4">
                                                    <img src="./assets/images/avatars/avt1.jpg" className="object-contain w-full "  />
                                                </div>
                                                <h5 className="text-base text-[#1A1E26] mr-8">JungKook</h5>
                                                <p className="text-sm font-light text-tertiary">January 15, 2023</p>
                                            </div>
                                            <hr className="bg-neutral-400 mb-4" />
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-gray-300">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-base text-[#1A1E26]">Absolutely love TopShelfBC; affordable
                                                    on any budget and such fast
                                                    delivery, straight to my door! I recommend them to all my friends and
                                                    family for their 420 needs.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="border border-gray-200 rounded-2xl p-5 lg:p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="w-9 h-9 rounded-full flex-shrink-0 overflow-hidden mr-4">
                                                    <img src="./assets/images/avatars/avt1.jpg" className="object-contain w-full "  />
                                                </div>
                                                <h5 className="text-base text-[#1A1E26] mr-8">JungKook</h5>
                                                <p className="text-sm font-light text-tertiary">January 15, 2023</p>
                                            </div>
                                            <hr className="bg-neutral-400 mb-4" />
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-gray-300">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-base text-[#1A1E26]">Absolutely love TopShelfBC; affordable
                                                    on any budget and such fast
                                                    delivery, straight to my door! I recommend them to all my friends and
                                                    family for their 420 needs.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="border border-gray-200 rounded-2xl p-5 lg:p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="w-9 h-9 rounded-full flex-shrink-0 overflow-hidden mr-4">
                                                    <img src="./assets/images/avatars/avt1.jpg" className="object-contain w-full "  />
                                                </div>
                                                <h5 className="text-base text-[#1A1E26] mr-8">JungKook</h5>
                                                <p className="text-sm font-light text-tertiary">January 15, 2023</p>
                                            </div>
                                            <hr className="bg-neutral-400 mb-4" />
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-yellow-500">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <span className="w-4 h-4 text-gray-300">
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-base text-[#1A1E26]">Absolutely love TopShelfBC; affordable
                                                    on any budget and such fast
                                                    delivery, straight to my door! I recommend them to all my friends and
                                                    family for their 420 needs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button className="rounded-full border border-[#99e0a2] text-primary px-6 py-[10px] hover:bg-green-700 hover:text-white transition duration-300 ease-in-out">show
                                            more</button>
                                    </div>
                                </div>
                                <hr className="mb-6 bg-neutral-400" />
                                <div>
                                    <h3 className="text-lg text-[#060709] mb-6 ">Add A Review </h3>
                                    <div className="flex items-center gap-4">
                                        <span>Your rating</span>
                                        <span>:</span>
                                        <div>
                                            <div className="my-rating " data-rating={0} />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <h5 className="mb-2">Your Review <span className="text-red-600">*</span></h5>
                                        <textarea className="w-full h-[93px] rounded-lg outline-0 border border-gray-200 p-4 resize-none" placeholder="Enter your review" defaultValue={""} />
                                    </div>
                                    <button className="btn btn-sm">Submit</button>
                                </div>
                            </div>
                            <div className="content border border-gray-200 rounded-2xl p-5 hidden lg:p-6">
                                <h3 className="text-lg mb-3 lg:mb-4 lg:text-xl">Referral Program</h3>
                                <p className="text-sm text-[#717378] lg:text-base mb-5 lg:mb-6">Absolutely love TopShelfBC;
                                    affordable on any
                                    budget and such fast delivery, straight to my door! I recommend them to all my friends
                                    and family for their 420 needs.
                                </p>
                                <hr className="bg-neutral mb-5 lg:mb-6" />
                                <div className="bg-green-50  p-4 mb-5 lg:mb-6">
                                    <div className="border-l border-l-red-600 pl-4 flex items-center gap-4">
                                        <div>
                                            <h5 className="text-sm text-[#46494F] mb-2">Your Referral URL</h5>
                                            <p className="text-base">Referral code is available only to users with at least one
                                                order.</p>
                                        </div>
                                        <button className="bg-white w-10 h-10 rounded-full text-green-600 text-lg hover:bg-primary hover:text-white flex-shrink-0 flex justify-center items-center">
                                            <span><i className="fa-regular fa-copy" /></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="bg-green-50  p-4 mb-5 lg:mb-6">
                                    <div className="border-l border-l-red-600 pl-4 flex items-center gap-4">
                                        <div>
                                            <h5 className="text-sm text-[#46494F] mb-2">Your Referral URL</h5>
                                            <p className="text-base">Referral code is available only to users with at least one
                                                order.</p>
                                        </div>
                                        <button className="bg-white w-10 h-10 rounded-full text-green-600 text-lg hover:bg-primary hover:text-white flex-shrink-0 flex justify-center items-center">
                                            <span><i className="fa-regular fa-copy" /></span>
                                        </button>
                                    </div>
                                </div>
                                <hr className="bg-neutral mb-5 lg:mb-6" />
                                <div className="grid grid-cols-1 gap-3 mb-5 lg:mb-6 lg:grid-cols-3 lg:gap-6">
                                    <div className="p-3 lg:p-4 cursor-pointer flex items-center gap-3 hover:bg-green-50 lg:flex-col lg:gap-4 rounded-2xl border border-gray-200">
                                        <span className="text-[#337FFF] w-[26px] h-[26px] rounded-full lg:w-12 lg:h-12 flex justify-center items-center bg-[#EDF4FF]">
                                            <i className="fa-brands fa-facebook-f" />
                                        </span>
                                        <h3 className="text-sm text-[#46494F]">Share Via Facebook</h3>
                                    </div>
                                    <div className="p-3 lg:p-4 cursor-pointer flex items-center gap-3 hover:bg-green-50 lg:flex-col lg:gap-4 rounded-2xl border border-gray-200">
                                        <span className="text-[#33CCFF] w-[26px] h-[26px] rounded-full lg:w-12 lg:h-12 flex justify-center items-center bg-[#EEFBFF]">
                                            <i className="fa-brands fa-twitter" />
                                        </span>
                                        <h3 className="text-sm text-[#46494F]">Share Via Twitter</h3>
                                    </div>
                                    <div className="p-3 lg:p-4  cursor-pointer flex items-center gap-3 hover:bg-green-50 lg:flex-col lg:gap-4 rounded-2xl border border-gray-200">
                                        <span className="text-[#00D95F] w-[26px] h-[26px] rounded-full lg:w-12 lg:h-12 flex justify-center items-center bg-[#ECFFF5]">
                                            <i className="fa-brands fa-whatsapp" />
                                        </span>
                                        <h3 className="text-sm text-[#46494F]">Share Via Whatsapp</h3>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center mb-5 lg:mb-6">
                                    <button className="text-sm lg:text-base text-[#C8C9CB] hover:underline">Or share via
                                        email</button>
                                </div>
                                <div className=" flex flex-col mb-5 gap-2 lg:gap-6 lg:mb-4 lg:flex-row">
                                    <div>
                                        <h5 className="mb-2">Email</h5>
                                        <input type="text" className="w-full h-12 rounded-lg outline-0 border border-gray-200 p-4 lg:w-[248px]" placeholder="Enter your email" />
                                    </div>
                                    <div>
                                        <h5 className="mb-2">Name</h5>
                                        <div className="flex gap-4 lg:gap-6">
                                            <input type="text" className="w-full h-12 rounded-lg outline-0 border border-gray-200 p-4 lg:w-[248px]" placeholder="Enter your name" />
                                            <button className="bg-green-50 w-12 h-12 rounded-full text-green-600 text-lg hover:bg-primary hover:text-white flex-shrink-0 flex justify-center items-center mt- ">
                                                <span><i className="fa-solid fa-plus" /></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 mb-5 lg:mb-6 lg:gap-6 lg:flex-row">
                                    <input type="text" className="text-sm w-full h-12 rounded-lg outline-0 border border-gray-200 p-4 lg:w-[248px]" defaultValue="johndoe@example.com" />
                                    <input type="text" className="text-sm w-full h-12 rounded-lg outline-0 border border-gray-200 p-4 lg:w-[248px]" defaultValue="John Doe" />
                                </div>
                                <button className="btn btn-sm">Send Emails</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InforProduct