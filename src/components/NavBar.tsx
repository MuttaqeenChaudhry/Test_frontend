import React from 'react'

const NavBar : React.FC = () => {
  return (
    <div className='w-full h-fit mb-6 bg-violet-400'>
        <div className='w-full flex flex-col'>
            <div className='text-center pb-2 pt-2'>
                <b>- Nav Bar -</b>
            </div>
            <div className='w-full'>
              <div className='w-[50%] m-auto border border-b-0 border-black flex justify-evenly'>
                <a className='w-[80px] text-center border border-b-0 p-2 mt-1 mb-1 rounded-lg bg-violet-700 text-white hover:translate-y-[2px]' href="http://localhost:3000/">Home</a>
                <a className='w-[80px] text-center border border-b-0 p-2 mt-1 mb-1 rounded-lg bg-violet-700 text-white hover:translate-y-[2px]' href="http://localhost:3000/newad">New Ad</a>
                <a className='w-[80px] text-center border border-b-0 p-2 mt-1 mb-1 rounded-lg bg-violet-700 text-white hover:translate-y-[2px]' href="#">3</a>
              </div>
            </div>
        </div>
    </div>
  )
};

export default NavBar;
