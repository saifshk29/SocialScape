import React from "react";
import TrueFocus from "../Effects/TrueFocus";
import { ArrowUpRight } from "lucide-react";
import PixelCard from "../Effects/PixelCard";

function ContactUs() {
  return (
    <div className="h-screen     w-full flex flex-col items-center justify-center gap-12">
      {/* Heading on top */}
      <p className="text-white text-[50px] font-[600] tracking-widest">
        Contact Us
      </p>
      
      <div className="flex flex-row items-center justify-center gap-12">
        <div className="text-white text-xl font-normal">
          <TrueFocus
            sentence="Connect & Grow"
            manualMode={false}
            blurAmount={5}
            borderColor="#854CFF"
            animationDuration={0.5}
            pauseBetweenAnimations={0.5}
          />
        </div>

        <PixelCard variant="[#854CFF]" className="relative">
          <div className="absolute flex justify-center items-center w-[75%] gap-8">
            
              <input
                type="text"
                className="bg-white h-[60px] w-[60%] rounded-full text-[15px] px-5 outline-none border border-gray-200 focus:border-gray-400 transition-colors"
                placeholder="Email"
              />
              <button className="w-[150px] h-[50px] bg-white rounded-[40px] flex flex-row items-center justify-center gap-2 hover:bg-gray-50 transition-colors border border-gray-200">
                <span className="font-medium text-base">Connect</span>
                <ArrowUpRight className="h-5 w-5" />
              </button>
            
          </div>
        </PixelCard>
      </div>
    </div>
  );
}

export default ContactUs;
