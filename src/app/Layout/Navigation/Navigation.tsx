'use client';

import { FC, useEffect } from 'react';
import logo from '../../../../assets/img/logo.png';
import logoSub from '../../../../assets/img/logo-sub.png';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './nav.module.css';
import { X, AlignJustify } from 'lucide-react';
import { useAppContext } from '@/Provider/appContext';
import { cn } from '../../../../utils/twinMerge';

const Navigation: FC = () => {
  const { isNavVisible, setIsNavVissible } = useAppContext();

  useEffect(() => {
    if (window.innerWidth >= 600 && !isNavVisible) setIsNavVissible(true);

    const handleResize = () => {
      if (window.innerWidth >= 600 && !isNavVisible) setIsNavVissible(true);

      if (window.innerWidth <= 600 && isNavVisible) {
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
      className={clsx(
        styles.header,
        'nav__header col-start-1 row-start-1 col-span-2 flex justify-between items-center h-20 sm:pr-20 sm:pl-20 px-6 z-50'
      )}
    >
      <div className='flex gap-2 items-center z-200'>
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
          className='sm:hidden absolute top-5 right-10 z-50 block'
          onClick={() => setIsNavVissible(!isNavVisible)}
        >
          <AlignJustify className='h-10 w-10 stroke-slate-700' />
        </button>
      ) : (
        <button
          className='sm:hidden absolute top-5 right-10 z-50 block '
          onClick={() => setIsNavVissible(!isNavVisible)}
        >
          <X className='h-10 w-10 stroke-slate-700' />
        </button>
      )}
      <nav
        className={cn(
          styles.nav,
          'nav flex items-center justify-center absolute top-0 left-0 w-full h-full sm:static sm:w-auto sm:h-auto z-40 transition-all duration-500 ease-in sm:translate-x-0',
          {
            'opacity-0 translate-x-full pointer-events-none invisible':
              !isNavVisible,
            'opacity-1 translate-x-0 pointer-events-auto visible': isNavVisible,
          },
          'sm:translate-x-0'
        )}
      >
        <ul className='flex flex-col sm:flex-row  gap-11 sm:gap-16 items-center text-gray-600 font-bold sm:font-medium text-2xl sm:text-xl'>
          <li className='nav__ul--item'>
            <a href='#'> Početna</a>
          </li>
          <li className='nav__ul--item'>
            {' '}
            <a href='#'> O nama</a>
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
            <a
              href='#'
              className='active:scale-95 py-2 px-10 bg-color-accent-main hover:bg-color-shade-main transition-all, duration-300 rounded-sm text-color-shadest inline-flex items-center justify-center text-2xl sm:text-lg font-bold transition-color focus:outline-none focus:ring-8 focus:ring-ring-color-primary focus:ring-offset-2'
            >
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
