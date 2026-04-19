import React from 'react'
type BottomContainerProp = {
    gif:any
    title: string
    description:string
}
const BottomContainer = (prop:BottomContainerProp) => {
  return (
    <div className='flex flex-col items-center gap-3 px-[3vw]'>
      <div className='w-30'><img src={prop.gif} className='rounded-full'/></div>
      <div className='font-semibold'>{prop.title}</div>
      <div>{prop.description}</div>
    </div>
  )
}

export default BottomContainer
