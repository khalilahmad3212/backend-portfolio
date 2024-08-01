import React from 'react'
import Buttons from './Buttons'

function Contact() {
  return (
    <div className=" bg-slate-600 pb-20">
      <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
        <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
      </svg>

      <div className="text-center text-7xl my-12">
        <h1 className="text-white">Contacts</h1>
        <div className=" max-w-28 border-b-8 rounded-full mt-5 border-white mx-auto"></div>
      </div>

      <div className="text-primary text-center my-10">
        <p>Have a question?</p>
      </div>

      <form className="flex flex-col items-center gap-5 w-full md:w-[600px] mx-auto">
        <input type="text" placeholder="Name" className="bg-slate-700 outline-none w-full text-white px-3 py-2" />
        <input type="email" placeholder="Email" className="bg-slate-700 outline-none w-full text-white px-3 py-2" />
        <textarea placeholder="Message" rows={7} className="bg-slate-700 outline-none w-full text-white px-3 py-2"></textarea>
        <div className="self-end">
          <Buttons text="Send" Icon={null} />
        </div>
      </form>
    </div>
  )
}

export default Contact