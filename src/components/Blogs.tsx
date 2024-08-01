import Image from 'next/image'
import React from 'react'

// data
import blogs from '@/data/blogs-data';
import Heading from './Heading';

function Blogs() {
  return (
    <div className="py-20">
      <Heading title="Blogs" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 px-20">
        {
          blogs.map((item, index) => (
            <div key={index} className="bg-slate-800 text-white rounded-lg shadow-lg">
              <div className="overflow-hidden">
                <Image width={500} height={500} src={item.pic} alt="profile" className="mx-auto w-full h-full" />
              </div>
              <div className="p-5">
                <h2 className="text-2xl">{item.title}</h2>
                <p>{item.date}</p>
                <div className=" max-w-28 border-b-4 rounded-full border-primary my-2"></div>
                <p>{item.description}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='flex justify-end md:px-20 py-5'>
        <button className="group hover:bg-primary border-black hover:border-primary flex flex-row items-center gap-3 border-4 px-3 py-2 hover:text-white">
          View More
        </button>
      </div>
    </div>
  )
}

export default Blogs