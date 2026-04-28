"use client"
import React from 'react'
import TiltedCard from '../../components/TiltedCard'
import Image from 'next/image'
import { useParams } from 'next/navigation'
type ProfilePageProps = {
  params: {
    profile: string
  }
}

const Profile = () => {
  const params = useParams<{ profile: string }>()
  const profile = params.profile
  return (
    <div className='text-white'>
      
      {/* <div className="text-4xl">{`Hello ${profile}`}</div> */}
      <div className='relative'>
        <div className='cover w-screen h-[20vh] overflow-hidden mt-6'>
          <Image alt='Banner' src={"https://main.assets.gameloft.com/assets/blog/central/SMU-mod-header.png"} width={1920} height={20}></Image>
          <div className='absolute -bottom-[10vh] left-[46%] border-4 border-black rounded'>
            <TiltedCard
              imageSrc="https://dk2dv4ezy246u.cloudfront.net/widgets/sSwU0mKL75Z_large.jpg"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText={`${profile}`}
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="150px"
              imageWidth="150px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col w-screen items-center mt-[10vh] mb-4'>
        <div className=' text-white'>{`@${profile}`}</div>
        <div className="description text-slate-400">{`Creating Animated art for POGO`}</div>
        <div className='flex gap-2 text-slate-400'>
          <div>{`1234 members`}</div><span>|</span>
          <div>{`33 posts`}</div><span>|</span>
          <div>{`$15,450/release`}</div>
        </div>
      </div>
      <div className='w-screen flex justify-around h-[40%]'>
        <div className="supporters bg-gray-900 p-5 w-[40%] rounded-lg h-[20vh]">
          <h2 className='text-2xl font-bold'>Supporters</h2>
          <ul>
            <li>{`Raghav Chadda paid $30 saying Mein hu lucky the racer`}</li>
            <li>{`Raghav Chadda paid $30 saying Mein hu lucky the racer`}</li>
            <li>{`Raghav Chadda paid $30 saying Mein hu lucky the racer`}</li>
            <li>{`Raghav Chadda paid $30 saying Mein hu lucky the racer`}</li>
          </ul>
        </div>
        <div className="paymentCards bg-red-500 w-[40%]">Payments</div>
      </div>

    </div>
  )
}

export default Profile
