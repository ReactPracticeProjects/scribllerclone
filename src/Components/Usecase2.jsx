import React from 'react'

function Usecase2() {
  return (
        <div className='h-[60vh] bg-primary flex  flex-col items-center justify-center gap-6'>
            <p className='text-4xl font-semibold text-secondary '>Try the hosted version without login.</p>

            <p className='text-secondary'>Just click below and start coding away! No login, download, or subscription!</p>

            <button className='bg-white rounded-sm px-8 py-3 hover:bg-buttonbg hover:text-white'>Start</button>

            <p className='text-4xl font-semibold text-secondary'>Check the source and star us on github.</p>

            <button className='bg-white rounded-sm px-8 py-3 hover:bg-buttonbg hover:text-white'>Github</button>
        </div>
  )
}

export default Usecase2
