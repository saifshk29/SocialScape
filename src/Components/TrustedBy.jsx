import React from "react";


function TrustedBy(){
    return(
        <div className="w-full h-[50vh] py-12 gap-7 overflow-x-hidden flex flex-col">
            
               <p className="text-white text-[50px] font-[400] tracking-widest pl-12">
                Trusted By
                </p>
                <div className="w-full opacity-70  h-[150px] bg-[#854CFF] flex flex-row gap-12 items-center justify-between overflow-hidden">
                    <div className="h-full w-[75px] blur-3xl bg-white"></div>
                    <div className="flex flex-row gap-8 items-center">
                    <img src="src\assets\images\logo1.png" alt="" className="w-[200px] "/>
                    <img src="src\assets\images\logo2.png" alt="" className="w-[200px] h-[150px] "/>
                    <img src="src\assets\images\logo3.png" alt="" className="w-[200px] "/>
                    </div>
                    <div className="h-full w-[75px] blur-3xl bg-white"></div>
                </div>
        </div>
    )
}
export default TrustedBy;