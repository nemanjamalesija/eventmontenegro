'use client';

import { FC, useEffect } from 'react';
import logo from '../../../assets/img/logo.png';
import logoSub from '../../../assets/img/logo-sub.png';
import Image from 'next/image';
import { X, AlignJustify } from 'lucide-react';
import { useAppContext } from '@/Provider/appContext';
import { cn } from '../../../utils/twinMerge';
import CustomLink from '@/components/ui/CustomLink';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navigation: FC = () => {
  const { isNavVisible, setIsNavVissible, navRef } = useAppContext();
  const router = useRouter();

  const handleBackHome = () => {
    router.push('/');
  };

  useEffect(() => {
    if (window.innerWidth >= 1000 && !isNavVisible) setIsNavVissible(true);

    const handleResize = () => {
      if (window.innerWidth >= 1000 && !isNavVisible) setIsNavVissible(true);

      if (window.innerWidth <= 1000 && isNavVisible) {
        setIsNavVissible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isNavVisible, setIsNavVissible]);

  return (
    <header
      ref={navRef}
      className='nav__header absolute top-0 left-0 w-full flex justify-between items-center h-20 sm:px-20 px-6 z-20'
    >
      <div className='logo flex gap-2 items-center z-30'>
        <Image
          src={logo}
          alt='Picture of the author'
          className='cursor-pointer  h-16 w-auto'
          priority={true}
          onClick={handleBackHome}
        />
        <Image
          src={logoSub}
          alt='Picture of the author'
          className='cursor-pointer   h-14 w-auto'
          onClick={handleBackHome}
        />
      </div>
      {!isNavVisible ? (
        <button
          className='lg:hidden absolute top-5 right-10 z-30 block'
          onClick={() => setIsNavVissible(!isNavVisible)}
        >
          <AlignJustify className='h-9 w-9 stroke-slate-700' />
        </button>
      ) : (
        <button
          className='lg:hidden absolute top-5 right-10 z-30 block '
          onClick={() => setIsNavVissible(!isNavVisible)}
        >
          <X className='h-9 w-9 stroke-slate-700' />
        </button>
      )}
      <nav
        className={cn(
          'nav absolute top-0 left-0 lg:static w-full h-[calc(100vh+1000px)] lg:h-full  lg:w-auto  bg-white lg:bg-inherit lg:backdropbackdrop-blur-0 flex items-start lg:items-center justify-center  z-20  transition-all ease-in duration-500 lg:transition-none opacity-1  backdrop-blur-md translate-x-0',
          {
            'opacity-0 translate-x-full pointer-events-none invisible':
              !isNavVisible,
            ' translate-x-0 pointer-events-auto visible bg-opacity-80':
              isNavVisible,
          }
        )}
      >
        <ul className='flex flex-col lg:flex-row  gap-11 lg:gap-16 items-center mt-48 lg:mt-0  text-gray-600 font-bold  lg:font-normal text-2xl lg:text-xl'>
          <li
            className='transition-all duration-300'
            onClick={() => setIsNavVissible(false)}
          >
            <Link
              href='/'
              className='hover:text-color-shade-main cursor-pointer'
            >
              Početna
            </Link>
          </li>
          <li
            className='transition-all duration-300'
            onClick={() => setIsNavVissible(false)}
          >
            <Link
              className='hover:text-color-shade-main cursor-pointer'
              href='#howItWorks'
              scroll={true}
            >
              Kako radimo
            </Link>
          </li>
          <li className='transition-all duration-300'>
            <Link
              className='hover:text-color-shade-main cursor-pointer'
              href='#offers'
              onClick={() => setIsNavVissible(false)}
            >
              Proslave
            </Link>
          </li>
          <li className='transition-all duration-300'>
            <Link
              className='hover:text-color-shade-main cursor-pointer'
              href='#rentEquipment'
              onClick={() => setIsNavVissible(false)}
            >
              Iznajmi opremu
            </Link>
          </li>
          <li className='transition-all duration-300'>
            <Link
              className='hover:text-color-shade-main cursor-pointer'
              href='#balloons'
              onClick={() => setIsNavVissible(false)}
            >
              Baloni
            </Link>
          </li>

          <li
            className='cursor-pointer'
            onClick={() => setIsNavVissible(false)}
          >
            <Link
              href='#contact'
              className='btn py-2 px-7 text-xl font-semibold btn active:scale-95 transition-all, duration-300 rounded-full inline-flex items-center justify-center transition-color focus:outline-none cursor-pointer bg-color-accent-main hover:bg-color-shade-main text-white'
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
