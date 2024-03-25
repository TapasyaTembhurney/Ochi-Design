import React from 'react'
import { motion } from 'framer-motion'
function Marquee() {
    return (
        <div className='w-full py-20 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]'>
            <div className='text border-t-2 border-b-2 border-zinc-500 gap-10 flex whitespace-nowrap overflow-hidden'>
                <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: "linear" , repeat: Infinity , duration: 15 }} className='text-[22vw] mb-5 leading-none font-secondary font-semibold uppercase pt-0 '>We are Ochi</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: "linear" , repeat: Infinity , duration: 15 }} className='text-[22vw] mb-5 leading-none font-secondary font-semibold uppercase pt-0'> We are Ochi</motion.h1>
            </div>

        </div>
    )
}

export default Marquee
