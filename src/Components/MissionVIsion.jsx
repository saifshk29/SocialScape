import React from "react";
import SplitText from "../Effects/SplitText";
import Squares from "../Effects/SquareBg";

function MissionVision() {
    return (
        <div className="w-full h-screen text-white z-50 flex flex-col justify-center items-center gap-5 relative overflow-hidden">
            {/* Background Squares */}
            <div className="absolute inset-0 opacity-50 -z-10">
                <Squares 
                    className="w-full h-full opacity-30"
                    speed={0.5} 
                    squareSize={40}
                    direction="diagonal" // up, down, left, right, diagonal
                    borderColor="#854CFF"
                    hoverFillColor="#854CFF"
                />
            </div>

            {/* Blurred Background Circles */}
            {/* <div className="w-[400px] h-[400px] -left-50 top-10 absolute bg-[#854CFF] blur-3xl opacity-50 rounded-full"></div>
            <div className="w-[300px] h-[300px] -right-40 top-75 absolute bg-[#504CFF] blur-3xl opacity-50 rounded-full"></div> */}
            
            {/* Mission Section */}
            <SplitText
                text="Mission"
                className="text-[75px] font-[800] tracking-widest text-center text-white"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
            />
            <p className="w-[1200px] text-[25px] font-[500] text-center leading-[40px] z-50">
                At SocialScape, we empower brands, startups, and micro-creators by crafting impactful digital experiences. Through innovative web solutions, compelling content, and strategic marketing, we help businesses build a strong online presence, connect with their audience, and achieve sustainable growth.
            </p>
            
            {/* Vision Section */}
            <SplitText
                text="Vision"
                className="text-[75px] font-[800] tracking-widest text-center text-white"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
            />
            <p className="w-[1200px] text-[25px] font-[500] text-center leading-[40px] z-50">
                To be the go-to digital partner for brands and creators, transforming ideas into engaging digital experiences. We strive to revolutionize the online landscape with creativity, technology, and strategy, ensuring every business has the tools to thrive in the digital era.
            </p>
        </div>
    );
}

export default MissionVision;