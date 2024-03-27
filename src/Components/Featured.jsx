import { motion, useAnimate, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from "gsap/all";

function Featured() {
    const cards= [useAnimation(),useAnimation()]
    const handleHover = (index) => {
        cards[index].start({y : "0"});
    };

    const handleHoverEnd = (index) => {
        cards[index].start({y:"100%"});
    }
    return (
        <div className='w-full py-28'>
            <div className='w-full px-20 border-b-[1.5px] border-zinc-700 pb-14 '>
                <h1 className='text-6xl font-["Neue_Montreal"]'>Featured projects</h1>
            </div>
            {/* <div className='flex mt-10 -mb-24 bg-orange-500 text-black'>  
                    <ol className='list-disc' >
                        <li>FYDE</li>
                        </ol>
                </div> */}
            <div className='px-20'>
                <div className='cards w-full flex gap-8 mt-24'>
                    <motion.div 
                    onHoverStart={() => handleHover(0)}
                    onAnimationEnd={() => handleHoverEnd(0)} 
                    className='cardcontainer relative w-1/2 h-[78vh]'>
                        <h1 className='absolute flex text-[#CDEA68] overflow-hidden font-bold right-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-mono leading-none tracking-tighter'>
                            {"FYDE".split('').map((item, index) => (
                                <motion.span initial={{y : "100%"}}
                                animate={cards[1]}
                                transition={{ease : [0.22,0.1,0.36,1] , delay : index*0.05}}
                                className='inline-block'>{item}</motion.span>
                            ))}
                        </h1>
                    </motion.div>
                    <div className='card rounded-xl w-full h-full overflow-hidden '>
                        <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <div className='cardcontainer relative w-1/2 h-[81vh]'>
                    <div className='card rounded-xl w-full h-full overflow-hidden'>
                        <h1 className='absolute text-[#CDEA68] font-bold right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-mono leading-none tracking-tighter'>VISE</h1>
                        {"VISE".split('').map((item, index) => (
                             <motion.div 
                             onHoverStart={() => handleHover(0)}
                             onAnimationEnd={() => handleHoverEnd(0)} 
                             className='cardcontainer relative w-1/2 h-[78vh]'>
                                 <h1 className='absolute flex text-[#CDEA68] overflow-hidden font-bold right-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-mono leading-none tracking-tighter'>
                                     {"FYDE".split('').map((item, index) => (
                                         <motion.span initial={{y : "100%"}}
                                         animate={cards[0]}
                                         transition={{ease : [0.22,0.1,0.36,1] , delay : index*0.05}}
                                         className='inline-block'>{item}</motion.span>
                                     ))}
                                 </h1>
                             </motion.div>
                        ))}
                        <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
