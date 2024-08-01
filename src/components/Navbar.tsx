import React from 'react'

function Navbar() {
  return (
    <div className=' sticky top-0'>
      <div className=" bg-slate-900 flex gap-8 px-5 py-3 border-b-4 border-primary">
        {
          [
            "Home",
            "About",
            "Portfolio",
            // "Blog",
            "Contact"
          ].map((item, index) => (
            <div key={index} className="text-white text-2xl hover:text-pink-600 cursor-pointer opacity-70">{item}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Navbar