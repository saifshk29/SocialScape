import React from "react";
import TextPressure from "../Effects/TextPressure";

function WhatWeDo() {
    return (
        <div className="w-full min-h-screen items-center justify-center flex flex-col gap-7 mt-5">
            {/* <p className="text-white font-[600] text-[60px]">
                What We Do
            </p> */}
            <div style={{position: 'relative', height: '100px'}}>
            <TextPressure
                text="What We Do"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={100}
            />
</div>
            <p className="text-white font-medium text-[20px]">
                From Design to Development , Content to Motion , We do it all
            </p>
            {/*WHAT WE DO GRID*/}
            <div className="flex flex-col gap-7">
                {/*TopGrid*/}
                <div className="w-full flex flex-row gap-5">
                    <div className="w-[690px] h-[351px] bg-[#504CFF] rounded-[24px] flex flex-row pt-12 pl-8 gap-5">
                        {/*Left part*/}
                        <div className="flex flex-col gap-5">
                            <img src="src\assets\images\WebDevGlobe.png" alt="" className="w-[60px] h-[60px]" />
                            <p className="w-[252px] h-[43px] font-[500] text-[32px] leading-[43.2px] text-white">Website Dev</p>
                            <p className="w-[252px] h-[84px] font-[400] text-[16px] leading-[28px] text-white">
                                From concept to code—websites that are fast, functional, and built to grow with you.
                            </p>
                        </div>
                        <div className="w-full h-full relative overflow-hidden">
                            <img src="src\assets\images\WebDevIcon.png" alt="" className="opacity-70 absolute -right-20 -bottom-10 w-[500px] h-[338px]" />
                        </div>
                    </div>
                    <div className="w-[486px] h-[351px] flex flex-row bg-[#151515]
                                rounded-[24px] pt-12 pl-8 gap-5">
                        {/*Left part*/}
                        <div className="flex flex-col gap-5">
                            <img src="src\assets\images\UIUXlogo.png" alt="" className="w-[60px] h-[60px]" />
                            <p className="w-[252px] h-[43px] font-[500] text-[32px] leading-[43.2px] text-white">UI/UX Design</p>
                            <p className="w-[252px] h-[84px] font-[400] text-[16px] leading-[28px] text-white">
                                Seamless, user-friendly experiences designed to engage and convert.
                            </p>
                        </div>
                        <div className="w-full h-full relative overflow-hidden">
                            <img src="src\assets\images\UIUXicon.png" alt="" className="opacity-70 absolute -right-5 -bottom-10 w-[500px] h-[338px]" />
                        </div>
                    </div>
                </div>
                {/*middleGrid*/}
                <div className="w-full flex flex-row gap-5">

                    <div className="w-[486px] h-[351px] flex flex-row bg-[#151515]
                                rounded-[24px] pt-12 pl-8 gap-5">
                        {/*Left part*/}
                        <div className="flex flex-col gap-5">
                            <img src="src\assets\images\ContenCreationLogo.png" alt="" className="w-[60px] h-[60px]" />
                            <p className="w-[252px] h-[43px] font-[500] text-[32px] leading-[43.2px] text-white">Content Creation</p>
                            <p className="w-[252px] h-[84px] font-[400] text-[16px] leading-[28px] text-white">
                                High-quality content that speaks to your audience and strengthens your brand.
                            </p>
                        </div>
                        <div className="w-full h-full relative overflow-hidden">
                            <img src="src\assets\images\Content Creation.png" alt="" className="opacity-70 absolute  -bottom-10 w-[500px] h-[298px]" />
                        </div>
                    </div>
                    <div className="w-[690px] h-[351px] bg-[#854CFF] rounded-[24px] flex flex-row pt-12 pl-8 gap-5">
                        {/*Left part*/}
                        <div className="flex flex-col gap-5">
                            <img src="src\assets\images\AnimatedVideoLogo.png" alt="" className="w-[60px] h-[60px]" />
                            <p className="w-[290px] h-[43px] font-[500] text-[32px] leading-[43.2px] text-white">Animated & Informative Videos</p>
                            <p className="w-[284px] h-[84px] font-[400] text-[16px] leading-[28px] text-white mt-8">
                                Bringing stories to life through motion, making information engaging and easy to digest.
                            </p>
                        </div>
                        <div className="w-full h-full relative overflow-hidden">
                            <img src="src\assets\images\Animated Video.png" alt="" className="opacity-70 absolute -bottom-10 w-[400px] h-[400px]" />
                        </div>
                    </div>
                </div>
                {/*BottomGrid*/}
                <div className="w-full flex flex-row gap-5">
                    <div className="w-[690px] h-[351px] bg-[#504CFF] rounded-[24px] flex flex-row pt-12 pl-8 gap-5">
                        {/*Left part*/}
                        <div className="flex flex-col gap-5">
                            <img src="src\assets\images\AnimatedVideoLogo.png" alt="" className="w-[60px] h-[60px]" />
                            <p className="w-[252px] h-[43px] font-[500] text-[32px] leading-[43.2px] text-white">Video Editing</p>
                            <p className="w-[252px] h-[84px] font-[400] text-[16px] leading-[28px] text-white">
                                Captivating visuals and seamless edits that enhance your brand’s storytelling, keeping your audience engaged and inspired.
                            </p>
                        </div>
                        <div className="w-full h-full relative overflow-hidden">
                            <img src="src\assets\images\VideoEditing.png" alt="" className="opacity-70 absolute -right-10 -bottom-10 w-[500px] h-[338px]" />
                        </div>
                    </div>
                    <div className="w-[486px] h-[351px] flex flex-row bg-[#151515]
                                rounded-[24px] pt-12 pl-8 gap-5">
                        {/*Left part*/}
                        <div className="flex flex-col gap-5">
                            <img src="src\assets\images\ContenCreationLogo.png" alt="" className="w-[60px] h-[60px]" />
                            <p className="w-[252px] h-[43px] font-[500] text-[32px] leading-[43.2px] text-white">SEO optimization</p>
                            <p className="w-[252px] h-[84px] font-[400] text-[16px] leading-[28px] text-white">
                                Strategic SEO techniques that boost your online visibility, drive organic traffic, and position your brand at the top of search results.
                            </p>
                        </div>
                        <div className="w-full h-full relative overflow-hidden">
                            <img src="src\assets\images\UIUXicon.png" alt="" className="opacity-70 absolute -right-5 -bottom-10 w-[500px] h-[338px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;