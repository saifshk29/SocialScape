import React from "react"
import InteractiveBackground from "../Components/Background"
import { Instagram } from "lucide-react"
import { Twitter } from "lucide-react"
import { Link } from "react-router-dom"
function Navbar() {


    return (
        <div className="w-full bg-transparent flex flex-row text-white self-start py-8 items-center justify-evenly">
            {/*LOGO AND NAME*/}
            <div className="flex flex-row gap-3 items-center ">
                <img src="src\assets\SocialScapeLogo.png" alt="" className="w-[100px]" />

            </div>
            {/*LINKS*/}
            <ul className="flex flex-row gap-5 items-center">
                <li className="font-[500] text-[21px] leading-[21.6px] hover:scale-110 duration-300 select-none">Services</li>
                <li className="font-[500] text-[21px] leading-[21.6px] hover:scale-110 duration-300 select-none">About Us</li>
                <li className="font-[500] text-[21px] leading-[21.6px] hover:scale-110 duration-300 select-none">Contact Us</li>
            </ul>
            {/*Social Media*/}
            <div className="flex flex-row gap-5 justify-center">
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

export default Navbar
