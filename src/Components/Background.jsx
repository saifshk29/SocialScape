import React, { useState, useEffect, useCallback, useRef } from "react";
import { Mouse } from 'lucide-react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import RotatingText from "../Effects/RotatingText";

const InteractiveBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [stripes, setStripes] = useState([]);

  useEffect(() => {
    const stripeWidth = 64;
    const numberOfStripes = Math.ceil(window.innerWidth / stripeWidth);
    setStripes(
      Array.from({ length: numberOfStripes }, (_, i) => ({
        id: i,
        x: i * stripeWidth,
      }))
    );
  }, []);

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);
  const handleMouseLeave = useCallback((e) => {
    setMousePos({ x: -1000, y: -1000 });
  }, []);

  const getStripeStyles = (stripeX) => {
    const distance = Math.abs(mousePos.x - (stripeX + 32));
    const maxDistance = 200;
    const impact = Math.max(0, 1 - distance / maxDistance);
    const scale = 1 + impact * 0.5;

    let background = "black";
    let border = "none";

    // Add radial gradient effect with adjustable radius
    const gradientDistance = Math.min(distance / maxDistance, 1);
    const gradientOpacity = Math.max(0, 1 - gradientDistance);

    if (gradientOpacity > 0) {
      const radius = "300px"; // Adjust this value to control the size of the gradient
      background = `radial-gradient(circle ${radius}, rgba(133, 76, 255, ${gradientOpacity}) 0%, rgba(0, 0, 0, 1) 100%)`;
      border = "0.5px solid #9795FF";
    }

    return {
      transform: `scaleY(${scale})`,
      background,
      border,
    };
  };

  const containerRef = useRef(null);

  return (
    <div
      className=" inset-0 bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex">
          {stripes.map((stripe) => (
            <div
              key={stripe.id}
              className="h-full transition-all duration-300 ease-out origin-center "
              style={{
                width: "64px",
                ...getStripeStyles(stripe.x),
              }}
            />
          ))}
        </div>
        {/* Example content overlay */}
        <div className="relative z-10 flex flex-col w-full items-center  h-screen">
          <Navbar />
          {/* Hero Section */}
          <div className="w-full flex flex-col items-center gap-12 my-32">
            {/* Heading and Sub-text */}
            <p className="w-[1224px] h-[250px] font-[500] text-[105px] leading-[105px] text-center tracking-wide bg-gradient-to-r from-white via-white to-[#854CFF] bg-clip-text text-transparent select-none">
              Your Partner In
              <br></br>
              Digital Evolution
            </p>
            <p className="text-white mt-5tracking-wide leading-[27px] font-[400] text-[20px]">
              Empowering creators and brands with solutions that make a
              difference
            </p>
            {/* CTA */}
            <button className="w-[172px] h-[50px] bg-white rounded-[40px] text-center flex flex-row  items-center justify-center gap-2">
              <p className="font-[500] text-[16px]">Our Portfolio</p>
              <ArrowUpRight className="h-[20px] w-[20px] rounded-full border-1 border-black" />
            </button>
            <div className="text-white flex flex-col justify-center items-center gap-2 -mt-8 mb-8"> 
              <div className="flex flex-row items-center justify-center gap-3">
              {/* <p className="text-white text-[25px] font-[800] traking-[1px]">
                Scroll Down For
              </p> */}
              {/* <RotatingText
                texts={['More', 'Info!']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-purple-500 to-blue-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-[25px] font-[800] traking-[1px]"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              /> */}
              </div>
              
              <Mouse />
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveBackground;
