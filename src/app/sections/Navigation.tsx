'use client';

import { FC, useEffect } from 'react';
import logo from '../../../assets/img/logo.png';
import logoSub from '../../../assets/img/logo-sub.png';
import Image from 'next/image';
import { X, AlignJustify } from 'lucide-react';
import { useAppContext } from '@/Provider/appContext';
import { cn } from '../../../utils/twinMerge';
import CustomLink from '@/components/ui/CustomLink';

const Navigation: FC = () => {
  const { isNavVisible, setIsNavVissible } = useAppContext();

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
    <header className='nav__header flex justify-between items-center h-20 sm:px-20 px-6 z-50'>
      <div className='flex gap-2 items-center'>
        <Image
          src={logo}
          alt='Picture of the author'
          className='cursor-pointer  h-14 w-auto'
          priority={true}
        />
        <Image
          src={logoSub}
          alt='Picture of the author'
          className='cursor-pointer   h-12 w-auto'
        />
      </div>
      {!isNavVisible ? (
        <button
          className='lg:hidden absolute top-5 right-10 z-50 block'
          onClick={() => setIsNavVissible(!isNavVisible)}
        >
          <AlignJustify className='h-9 w-9 stroke-slate-700' />
        </button>
      ) : (
        <button
          className='lg:hidden absolute top-5 right-10 z-50 block '
          onClick={() => setIsNavVissible(!isNavVisible)}
        >
          <X className='h-9 w-9 stroke-slate-700' />
        </button>
      )}
      <nav
        className={cn(
          'bg-white lg:bg-bg-general bg-opacity-80 lg:bg-opacity-1 backdrop-blur-md lg:backdropbackdrop-blur-0 flex items-start justify-center absolute top-0 left-0 w-full h-full lg:static lg:w-auto lg:h-auto z-40 transition-all duration-500 ease-in lg:translate-x-0',
          {
            'opacity-0 translate-x-full pointer-events-none invisible':
              !isNavVisible,
            'opacity-1 translate-x-0 pointer-events-auto visible': isNavVisible,
          }
        )}
      >
        <ul className='flex flex-col lg:flex-row  gap-11 lg:gap-16 items-center mt-48 lg:mt-0  text-gray-600 font-bold  lg:font-normal text-2xl lg:text-xl'>
          <li className='nav__ul--item'>
            <a href='#'> Početna</a>
          </li>
          <li className='nav__ul--item'>
            {' '}
            <a href='#'>Kako radimo</a>
          </li>
          <li className='nav__ul--item'>
            {' '}
            <a href='#'> Iznajmi opremu</a>
          </li>
          <li className='nav__ul--item'>
            {' '}
            <a href='#'>Proslave</a>
          </li>
          <li className='nav__ul--item'>
            <CustomLink className='py-2 px-5 text-xl font-semibold'>
              Kontakt
            </CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
