import React from 'react';
import Image from 'next/image';
import imgPetal1 from '@/app/icons/petal-1.svg';
import imgPetal2 from '@/app/icons/petal-2.svg';
import imgPetal3 from '@/app/icons/petal-3.svg';
import imgPetal4 from '@/app/icons/petal-4.svg';
import imgPetal5 from '@/app/icons/petal-5.svg';
import imgPetal6 from '@/app/icons/petal-6.svg';

export default function PetalsOverlay() {
  const numPetals = 50;
  const maxBlur = 5; // Reduced max blur value
  const maxZIndex = 10;
  const containerWidth = 1920; // Example width of the container
  const containerHeight = 1080; // Example height of the container

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const petals = Array.from({ length: numPetals }, (_, index) => {
    const petalIndex = Math.floor(Math.random() * 6); // Randomly select a petal image
    const zIndex = getRandomInt(1, maxZIndex);
    const blur = Math.abs(maxBlur * (1 - (index + 1) / numPetals)); // Decrease blur with increasing index

    // Random position within the container
    const positionStyle = {
      left: getRandomInt(0, containerWidth) + 'px',
      top: getRandomInt(0, containerHeight) + 'px',
    };

    const style = {
      zIndex,
      filter: `blur(${blur}px)`,
      position: 'absolute',
      ...positionStyle,
    };

    const petalImages = [imgPetal1, imgPetal2, imgPetal3, imgPetal4, imgPetal5, imgPetal6];
    return (
      <Image
        key={index}
        src={petalImages[petalIndex]}
        alt=''
        style={style}
      />
    );
  });

  return (
    <div className='w-full h-full absolute top-0 left-0 overflow-hidden pointer-events-none'>
      {petals}
    </div>
  );
}
