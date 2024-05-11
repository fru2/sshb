import Image from 'next/image';
import React from 'react';
import icoPlay from '@/app/icons/play-circle.svg';
import icoPause from '@/app/icons/bx-pause-circle.svg';


export default function FixedVideo() {
  return (
    <div className="relative bg-card-gray w-full aspect-video">
        <video src=""></video>
        <Image className="absolute top-[50%] left-[50%] h-12 w-12 translate-x-[-50%] translate-y-[-50%] gray" src={icoPause} alt=""></Image>
      </div>
  )
}
