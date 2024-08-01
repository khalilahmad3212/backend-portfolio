import React from 'react'

function Buttons({ text, Icon }: { text: string, Icon: any }) {
  return (
    <button className="group hover:bg-primary hover:border-primary flex flex-row items-center gap-3 border-4 px-3 py-2 text-white">
      <span>{text}</span>
      {Icon &&
        <Icon className="group-hover:rotate-90 transition-all duration-500" />
      }
    </button>
  )
}

export default Buttons