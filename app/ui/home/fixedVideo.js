import Image from 'next/image';
import React from 'react';
import icoPause from '@/app/icons/bx-pause-circle.svg';
import icoPlay from '@/app/icons/play-circle.svg';


export default function FixedVideo() {
  return (
    <div>
      <div className=''>fixedVideo</div>
      <Image src={icoPause} alt=''></Image>
    </div>
  )
}
