import React from 'react'
import coffeeBreakGif from "../assets/coffee-break.gif";


const Top = () => {
    return (
        <div>
            <div className='w-screen flex flex-col gap-4 items-center justify-center min-h-[30vh]'>
                <div className='flex justify-center'>
                    <div className='font-extrabold text-6xl'>Get me a Chai</div>
                    <div className='h-fit'>
                        <img src={coffeeBreakGif.src} alt="coffee break" width={60} />
                    </div>
                </div>
                <div>A crowd-funding platform for creators. Get funded by your fans and followers. Start Now!</div>
                <div></div>
            </div>

        </div>
    )
}

export default Top
