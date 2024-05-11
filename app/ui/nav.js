'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import icoMenu from '@/app/icons/menu.svg';
import Link from 'next/link';

export default function Nav({ disable }) {

  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    const loginState = localStorage.getItem('loginState');
    setIsLoggedIn(!!loginState);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loginState');
    setIsLoggedIn(false);
  }

  return (
    <nav className='w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 fixed top-0 border-b-[1px] max-h-[4.5rem] bg-white z-50'>
      {/* TODO: Discard changes before commiting */}
      {/* <Link href='/' className='h-16'><Image src={logoPesu} alt='PES Logo' className='h-full w-full' priority/></Link> */}
      <span className='uppercase'>Social something</span>

      <div className='flex gap-8 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <Link href='#'>Projects</Link>
        <Link href='#'>Invest</Link>
        <Link href='#'>Resources</Link>
        <Link href='#'>Resources</Link>
        <Link href='#'>Resources</Link>
      </div>

      
      <Link className='ml-8 w-6 mt-[3px] flex' href='#'><Image className='h-full w-full' src={icoMenu} alt="Menu button"/></Link>

      

      {/* {disable ? null : isLoggedIn ? <SolidButton text='Logout' click={handleLogout} link='/'></SolidButton> : <SolidButton text='Login' link='/pages/login'></SolidButton>} */}

    </nav>
  )
}
