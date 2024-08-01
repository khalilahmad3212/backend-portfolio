import Image from 'next/image'
import React from 'react'
import Heading from './Heading'

// data
import skills from '@/data/skills-data';
import qualities from '@/data/qualities';

// image
import img from '@/assets/profile.jpg';

function About() {
  return (
    <div>
      <Heading title="About" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:px-28 py-10">
        {
          qualities.map((item, index) => (
            <div key={index} className="shadow-lg">
              <div className=" h-44">
                <Image width={100} height={100} src={item?.image?.src || ''} alt="profile" className="mx-auto w-full h-full object-cover bg-center" />
              </div>
              <div className="py-5 px-2 flex flex-col gap-5 items-center text-center">
                <h2 className="text-3xl">{item.title}</h2>
                <p className="opacity-70">{item.content}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex pt-20">
        <div className="flex-1 flex flex-col gap-7 items-center justify-center">
          <div className="w-44 rounded-full overflow-hidden">
            <Image width={500} height={500} src={img.src} alt="profile" className="mx-auto w-full h-full" />
          </div>
          <div className="w-full md:max-w-96 text-center">
            <h2 className="text-3xl">Who am I?</h2>
            <p className="opacity-70">I&apos;am Backend Developer who loved to develop the robust, scalable and maintainable systems</p>
          </div>
        </div>
        <div className="flex-1 px-10">
          {
            skills.map((item, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="w-28">{item.name} ({item.percentage})</div>
                <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className={`h-full bg-primary`}
                    style={{ width: `${item.percentage}0%` }}
                  ></div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default About