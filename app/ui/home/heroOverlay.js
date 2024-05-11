import Image from 'next/image';
import React from 'react';
import { WindmillIconLeft, WindmillIconRight } from './windmill';
import imgBigEclipse from '@/app/images/Ellipse 1.png';
import imgSmallEclipse from '@/app/images/Ellipse 2.png';


export default function HeroOverlay() {
  return (
    <div className='w-svw h-svh absolute top-0 left-0'>
      <WindmillIconLeft></WindmillIconLeft>
      <WindmillIconRight></WindmillIconRight>
      <Image className='absolute bottom-[-70%] left-[-50%] -z-30 ' src={imgBigEclipse} alt=''></Image>
      <Image className='absolute top-[-70%] right-[-50%] -z-30 ' src={imgSmallEclipse} alt=''></Image>
    </div>
  )
}
