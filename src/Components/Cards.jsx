import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-900 flex items-center px-20 gap-5' >
            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className='card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center'>
                    <img className='h-[9vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute rounded-full px-5 py-1 border-2 left-10 bottom-10 border-y-amber-400 text-yellow-400'>&copy;2019-2022</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
                <div className='card relative rounded-xl w-2/3 h-FULL bg-[#1c3430] flex items-center justify-center'>
                    <img className='w-40' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute rounded-full px-1 py-1 border-2 left-10 bottom-10 border-x-teal-400 text-yellow-400 tracking-tighter'>RATING 5.O ON CLUTCH</button>
                </div>
                <div className='card relative rounded-xl w-2/3 h-full bg-[#1c3430]  flex items-center justify-center'>
                <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute rounded-full px-1 py-1 border-2 left-10 bottom-10 border-x-teal-400 text-yellow-400 tracking-tighter'>BUSINESS BOOTCAMP ALUMNI</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
