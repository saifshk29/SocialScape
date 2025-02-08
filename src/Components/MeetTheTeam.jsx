import React from "react";
import RotatingText from "../Effects/RotatingText";
import Aurora from "../Effects/Auora";
function MeetTheTeam() {
  // Define the missing function
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (

    <div className="w-full h-screen flex flex-col justify-center items-center gap-12 realtive">
      <div className="absolute w-full h-full">
        <Aurora colorStops={["#854CFF", "#504CFF", "#00D8FF"]} speed={2} />
      </div>

      <p className="text-white text-center text-[50px] font-[600] tracking-widest z-50">
        Meet The Team
      </p>
      <p className="text-white w-[800px] text-[20px] text-center z-50">
        We’re a team of two creatives passionate about building digital experiences that matter. Whether it’s crafting intuitive designs, developing seamless websites, or creating engaging content, we bring your vision to life with skill and strategy.
      </p>

      <div className="flex flex-row gap-5">
        {/*Saif Card*/}
        <div className="w-[510px] h-[300px] bg-[#151515] rounded-[24px] flex flex-col p-8 gap-8 relative overflow-hidden z-50">
          <img src="src\assets\images\Gradient.png" alt="" className="absolute -rotate-45 -bottom-70 -left-10 w-[900px] -z-10" />
          <div className="flex flex-row gap-5 items-center">
            <img src="src\assets\images\saifpfp.jpg" alt="" className="h-[80px] w-[80px] rounded-full" />
            <div className="flex flex-col text-white">
              <p className="text-[24px]">Saif Shaikh</p>
              <p className="text-[18px]">Founder</p>
            </div>
          </div>
          <div>
            <p className="text-white font-[500] text-[18px] z-50  leading-[35px] ">
              Specializing in web design,website development,UI/UX and digital creativity,with 2+ years of experience in Website Development.
            </p>
          </div>
        </div>
        {/*Aniket Card*/}
        <div className="w-[510px] h-[300px] bg-[#151515] rounded-[24px] flex flex-col p-8 gap-8 relative overflow-hidden z-10">
          <img src="src\assets\images\Gradient.png" alt="" className="absolute -rotate-45 -bottom-70 -left-10 w-[900px] -z-10" />
          <div className="flex flex-row gap-5 items-center">
            <img src="src\assets\images\aniketpfp.jpg" alt="" className="h-[80px] w-[80px] rounded-full" />
            <div className="flex flex-col text-white">
              <p className="text-[24px]">Aniket Gaikwad</p>
              <p className="text-[18px]">Co-Founder</p>
            </div>
          </div>
          <div>
            <p className="text-white font-[500] text-[18px]  leading-[35px] z-50">
              Specializing in Product Shoots,Video Editing,VFX and 3D,with 2+ years of experience in Video Production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
