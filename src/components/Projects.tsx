import Image from 'next/image'
import React from 'react'
import Heading from './Heading'

// data
import projects from '@/data/projects-data';
import Buttons from './Buttons';

function Projects() {
  return (
    <div className="bg-[#f5f5f5] pt-5">
      <Heading title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 md:px-20 gap-1">

        {
          projects.map((item, index) => (
            <div key={index} className="flex flex-col gap-5 border-4 border-primary">
              <div className="overflow-hidden h-96">
                <Image width={500} height={500} src={item.img} alt="profile" className="mx-auto w-full h-full" />
              </div>
              {/* <div className="flex-1">
              <h2 className="text-2xl">{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <a href={item.link} className="text-primary">View Project</a> */}
            </div>
          ))
        }
      </div>
      <div className=' flex justify-end md:px-20 py-5'>
        <button className="group hover:bg-primary border-black hover:border-primary flex flex-row items-center gap-3 border-4 px-3 py-2 hover:text-white">
          View More
        </button>
      </div>
    </div>
  )
}

export default Projects