import React from 'react'

function Heading({ title }: { title: string }) {
  return (
    <div className="text-center text-7xl my-12">
      <h1 className="">{title}</h1>
      <div className=" max-w-28 border-b-8 rounded-full mt-5 border-black mx-auto"></div>
    </div>
  )
}

export default Heading