import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-800 pt-1'>
      <div className='textstructure mt-40 px-20'>
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className='masker'>
              <div className='w-fit flex items-center overflow-hidden'>
                {index === 1 && (
                  <motion.div initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className='mr-5 w-[9vw] rounded-md h-[5vw] bg-green-400'>
                    <img src="https://assets.awwwards.com/awards/images/2022/09/ochi-cover.jpg" alt="" />
                  </motion.div>
                )}
                <h1 className='uppercase text-[6.8vw] leading-[6.5vw] tracking-tighter font-["Founders_Grotesk"] font-regular'>
                  {item}
                </h1>
              </div>
            </div>
          )
        })}
      </div>
      <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-4 px-20'>
        {["For public and private companies", "From the first pitch to IPO"]
          .map((item, index) => (
            <p className='text-md tracking-tight leading-none font-light text-md'>{item}</p>
          ))}
        <div className='start flex items-center gap-5'>
          <div className='px-5 py-2 border-[2px] rounded-full border-zinc-500 font-light uppercase text-md '>Start the project</div>
          <div className='w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
