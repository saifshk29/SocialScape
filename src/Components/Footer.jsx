import { div } from "framer-motion/client";
import React from "react";
import { Instagram } from "lucide-react"
import { Twitter } from "lucide-react"

function Footer(){
    return( 
        <div className="w-full h-[60vh] border-t-2 border-gray-700 bg-[#151515] p-24 z-50 flex flex-row gap-18 justify-between relative overflow-hidden">
            <div className="w-[400px] h-[400px] -z-10  -left-70 top-10 absolute bg-[#854CFF] blur-3xl rotate-45 opacity-50 rounded-full"></div>
            <div className="w-[400px] h-[400px] -z-10 left-[550px] -bottom-72 self-center absolute bg-[#854CFF] blur-3xl rotate-45 opacity-50 rounded-full"></div>
            <div className="w-[300px] h-[300px] -right-40 -top-30 absolute bg-[#504CFF] blur-3xl opacity-50 rounded-full"></div>
            <div>
            <img src="src\assets\SocialScapeLogo.png" alt="" className="w-[150px] h-[50px] mb-5" />
                <ul className="text-white space-y-2 z-50">
                    <li>Home</li>
                    <li>What We Do</li>
                    <li>Vision Mission</li>
                    <li>Meet The Team</li>
                    <li>Trusted By</li>
                    <li>Contact Us</li>
                </ul>
            </div>
                
                <div>
                <p className="text-white mb-5 text-[25px] font-[600]">Services</p>
                <ul className="text-white space-y-2 self-end">
                    
                    <li>Website Development</li>
                    <li>UI/UX Design</li>
                    <li>Content Creation</li>
                    <li>Animated and Informative Videos</li>
                    <li>Video Editing</li>
                    <li>SEO optimization</li>
                </ul>
                </div>
                <div className="flex flex-row gap-5 justify-end text-white self-end ">
                <a
                    href="https://www.instagram.com/social_scape.in?igsh=ZTJ2amw1b2Y3czRy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Instagram />
                </a>


                <Twitter />
            </div>
                
            
        </div>
    )
}
export default Footer;