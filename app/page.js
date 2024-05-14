'use client'

import Image from "next/image";
import Hero from "./ui/home/hero";
import FixedVideo from "./ui/home/fixedVideo";
import About from "./ui/home/about";
import HeroOverlay from "./ui/home/heroOverlay";
import imgNoise from '@/app/images/noise.png';
import PetalsOverlay from "./ui/home/petalsOverlay";
import { useRef } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window != 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set('.video-card', { scale: 1 });

    gsap.to('.video-card', {
      scrollTrigger: {
        trigger: '.video-card',
        start: 'center center',
        end: 'bottom top',
        pin: true,
        markers: true,
        scrub: true
      },
      scale: 1.25,
    });
  }, { scope: videoRef });


  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <HeroOverlay></HeroOverlay>
      <Hero></Hero>
      <PetalsOverlay></PetalsOverlay>
      <div ref={videoRef}>
        <FixedVideo></FixedVideo>
      </div>
      <Image src={imgNoise} className='absolute top-0 left-0 h-svh w-svw mix-blend-multiply pointer-events-none' alt=''></Image>
      <About></About>
    </main>
  );
}
