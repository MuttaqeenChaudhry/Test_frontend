import React from 'react'

export default function Cardm3(props) {
  return (
    <>
    <div>
        <div className='w-[250px] h-[290px] shadow-lg pb-4'>
            <div className='w-full h-full'>
                <div className='flex-col h-full'>
                <b className='h-[10%] block border p-[2px] bg-gray-400 border-none'>{props.title}</b>
                <img src={props.img} alt="Server Error" className='h-[70%] w-full' />
                <p className='h-[10%] overflow-hidden'>{props.description}</p>
                <a className='h-[10%] block w-fit ml-1 overflow-hidden text-center pl-2 pr-2 pt-1 pb-1 bg-gray-800' href={props.refLink}><b className='text-white block hover:translate-y-[2px]'>Read More</b></a>
                </div>

            </div>

        </div>
    </div>
    </>
  )
}
