import React from 'react'
import BottomContainer from './BottomContainer'
import MentorshipGif from '../assets/mentorship.gif'
import DollarGif from '../assets/dollar.gif'
import TeamGif from '../assets/team.gif'
const Bottom = () => {
  return (
    <div>
      <div className='flex flex-col w-screen items-center mt-[5vh]'>
        <div className='text-4xl font-extrabold'>Fans can buy you a Chai</div>
        <div className='mt-[10vh] flex'>
          <BottomContainer gif={MentorshipGif.src} title='Fans wants to help' description='Your fans are available to support you'/>
          <BottomContainer gif={DollarGif.src} title='Fans want to help' description='Your fans are willing to contribute financially'/>
          <BottomContainer gif={TeamGif.src} title='Fans wants to collaborate' description='Your fans are ready to collaborate with you'/>
        </div>
      </div>
    </div>
  )
}

export default Bottom
