import { Button } from '@mui/material'
import React from 'react'

export default function Hero() {

  return (
    <div className="h-min align-middle justify-center py-[140px]">
      <h1 className='uppercase leading-none text-center text-6xl font-medium'>
        sustaining<br></br>
        <span className='text-black'>sustainable</span><br></br>
        development
      </h1>

      <div className='flex gap-2 justify-center mt-8'>
        <Button className='w-36' variant='contained' style={{
          backgroundColor: 'rgba(113, 3, 16, 0.800)',
          borderRadius: '2px',
          boxShadow: 'none',
        }}>Projects</Button>
        <Button className='w-36' variant='outlined' style={{
          borderColor: 'rgba(113, 3, 16, 0.800)',
          borderRadius: '2px',
          boxShadow: 'none',
          color: 'rgba(0, 0, 0, 0.7)'
        }}>Invest now</Button>
      </div>
    </div>
  )
}
