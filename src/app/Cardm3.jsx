import React from 'react'

export default function Cardm3(props) {
  return (
    <>
    <div>
        <div className='relative w-[250px] h-[290px] shadow-lg pb-4'>
          <div className='absolute h-[2px] w-[40%] border border-violet-600 -top-[4px] -left-[2.2px] bg-violet-600 animate-pulse'/>
          <div className='absolute w-[2px] h-[60%] border border-violet-600 -top-[4px] -left-[4px]  bg-violet-600 animate-pulse'/>
            <div className='w-full h-full'>
                <div className='flex-col h-full overflow-hidden'>
                <b className='h-[10%] block border p-[2px] bg-violet-300 border-none'>{props.title}</b>
                <img src={props.img} alt="Server Error" className='h-[70%] w-full' />
                <p className='h-[10%] overflow-hidden ml-1'>{props.description}</p>
                <a className='h-[10%] block w-fit float-right mr-1 overflow-hidden text-center pl-2 pr-2 bg-violet-600 rounded-md' href={props.refLink}><span className='text-white block hover:translate-y-[2px]'>Read More</span></a>
                </div>

            </div>

        </div>
    </div>
    </>
  )
}
