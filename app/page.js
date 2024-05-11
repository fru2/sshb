import Image from "next/image";
import Hero from "./ui/home/hero";
import FixedVideo from "./ui/home/fixedVideo";
import About from "./ui/home/about";
import HeroOverlay from "./ui/home/heroOverlay";
import imgNoise from '@/app/images/noise.png';
import PetalsOverlay from "./ui/home/petalsOverlay";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <HeroOverlay></HeroOverlay>
      <Hero></Hero>
      <PetalsOverlay></PetalsOverlay>
      <FixedVideo></FixedVideo>
      <Image src={imgNoise} className='absolute top-0 left-0 h-svh w-svw mix-blend-multiply' alt=''></Image>
      <About></About>
    </main>
  );
}
