import React from 'react'
import Buttons from './Buttons'
import { FaArrowRight } from 'react-icons/fa6'

function Hero() {
  return (
    <div className="min-h-screen bg-slate-600 flex flex-col justify-center items-center gap-10">
      <div className="text-5xl tracking-wider text-center flex flex-col gap-5 text-white">
        <h1>Hello, I'm <span className=" text-pink-400">Meer Khalil.</span></h1>
        <h1>I am a Backend Developer</h1>
      </div>
      {
        <Buttons text="View My Work" Icon={FaArrowRight} />
      }
    </div>
  )
}

export default Hero