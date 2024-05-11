import React from 'react'

export default function About() {
  return (
    <div className='w-full py-[140px]'>
      <h3 className='text-4xl w-[28ch] font-thin'>Natural resources are <span className='text-white bg-blood-red'>reducing,</span> demands are not.</h3>

      <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full h-full">
        <div className="col-span-2 row-span-4 bg-card-gray min-h-8 min-w-8">1</div>
        <div className="col-span-2 row-span-2 bg-card-gray min-h-8 min-w-8">2</div>
        <div className="row-span-2 bg-card-gray min-h-8 min-w-8 aspect-square">3</div>
        <div className="row-span-2 bg-card-gray min-h-8 min-w-8 aspect-square">4</div>
      </div>


    </div>
  )
}
