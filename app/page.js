import Image from "next/image";
import Hero from "./ui/home/hero";
import icoPlay from '@/app/icons/play-circle.svg';
import icoPause from '@/app/icons/bx-pause-circle.svg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="h-min align-middle justify-center py-[120px]">
        <Hero></Hero>
      </div>

      <div className="relative bg-card-gray w-full aspect-video">
        <video src=""></video>
        <Image className="absolute top-[50%] left-[50%] h-12 w-12 translate-x-[-50%] translate-y-[-50%] gray" src={icoPause} alt=""></Image>
      </div>
    </main>
  );
}
