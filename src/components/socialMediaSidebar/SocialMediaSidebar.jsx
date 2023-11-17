import React from 'react'
import { ImLinkedin } from "react-icons/im";
import { FaBehanceSquare, FaDribbbleSquare } from "react-icons/fa";

function SocialMediaSidebar() {
  return (
    <div className={`absolute bottom-[20px] right-0 h-[270px] flex flex-col justify-between items-center px-0 py-[20px] z-[1]`}>
      <div className="h-[50px]">
        <p className="rotate-90">Follow Me</p>
      </div>
      <div className={`border-l-[1px] border-white h-[50px]`}></div>
      <div className={`flex flex-col gap-4`}>
        <a
          href="https://www.linkedin.com/in/mbabarashraf/"
          target="_blank"
          rel="noreferrer"
        >
          <ImLinkedin className={`w-[25px] h-[25px] hover:text-[#b91813]`} />
        </a>
        <a
          href="https://www.behance.net/muhammad_babar"
          target="_blank"
          rel="noreferrer"
        >
          <FaBehanceSquare className={`w-[25px] h-[25px] hover:text-[#b91813]`} />
        </a>
        <a href="https://dribbble.com/Babar_Ashraf" target="_blank" rel="noreferrer">
          <FaDribbbleSquare className={`w-[25px] h-[25px] hover:text-[#b91813]`} />
        </a>
      </div>
    </div>
  )
}

export default SocialMediaSidebar