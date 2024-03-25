import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[3.5vw]'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className='w-full flex gap-5 mt-12 pt-12 border-t-[2px] border-[#a1b562]'>
        <div className='w-1/2'>
          <h1 className='text-6xl'>Our approach:</h1>
          <button className=' flex uppercase gap-10 items-center px-10 py-6 mt-7 bg-zinc-900 rounded-full text-white'>Read More
            <div className='w-2.5 h-2.5 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-xl bg-[#b1ce4a]'>
          <img src="Ochi.JPG" alt="" className='h-full rounded-xl w-fit'/>
        </div>
      </div>
    </div>
  )
}

export default About
