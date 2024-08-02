import Banner from "./_components/Banner"
import BestDispensary from "./_components/BestDispensary"
import Choose from "./_components/Choose"
import Indica from "./_components/Indica"
import RecentlyAdded from "./_components/RecentlyAdded"
import ReferFriend from "./_components/ReferFriend"
import Service from "./_components/Service"
import TestimoTial from "./_components/TestimoTial"
import WeedEducation from "./_components/WeedEducation"
import WhatmakeUs from "./_components/WhatmakeUs"

const Homepage = () => {
  return (
    <>
     <Banner />
     <Service />
     <BestDispensary />
     <TestimoTial />
     <Choose />
     <ReferFriend />
     <WhatmakeUs />
     <RecentlyAdded />
     <Indica />
     <WeedEducation />
    </>
  )
}

export default Homepage