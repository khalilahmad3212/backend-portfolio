
import Link from 'next/link';
import React from 'react'

// icons
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <div className="bg-slate-700 outline-none w-full text-white px-3 py-20">
      <div className='flex justify-center gap-5'>
        {
          [
            {
              Icon: FaLinkedinIn,
              link: "https://www.linkedin.com/in/meer-khalil/",
            },
            {
              Icon: FiGithub,
              link: "https://github.com/khalilahmad3212"
            }
          ].map((item, index) => (
            <Link key={index} href={item.link} className=''>
              <item.Icon className="text-3xl w-12 h-12 text-white bg-[#262f38] hover:bg-primary px-3" />
            </Link>
          ))
        }
      </div>
      <div className='text-center text-sm mt-5'>
        <p>Developed by Meer Khalil. @2024</p>
      </div>
    </div>
  )
}

export default Footer