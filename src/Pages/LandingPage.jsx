import React from "react"
import InteractiveBackground from "../Components/Background"
import MissionVision from "../Components/MissionVIsion"
import WhatWeDo from "../Components/WhatWeDo"
import MeetTheTeam from "../Components/MeetTheTeam"
import TrustedBy from "../Components/TrustedBy"
import ContactUs from "../Components/ContactUs"
import Footer from "../Components/Footer"
function LandingPage() {
  

    return (
        <div className="w-full  bg-black flex flex-col">
            <InteractiveBackground/>
            <WhatWeDo/>
            <MissionVision/>
            <MeetTheTeam/>
            <TrustedBy/>
            <ContactUs/>
            <Footer/>
        </div>
    )
  }
  
  export default LandingPage
  