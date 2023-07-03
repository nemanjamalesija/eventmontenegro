'use client';
import { contentNavEnglish, contentNavSerbian } from '@/constants/navContent';
import { FC, useEffect } from 'react';
import { X, AlignJustify } from 'lucide-react';
import { useAppContext } from '@/Provider/appContext';
import { useRouter } from 'next/navigation';
import { cn } from '../../../utils/twinMerge';
import logo from '../../../assets/img/logo.png';
import logoSub from '../../../assets/img/logo-sub.png';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

const Navigation: FC = () => {
  const { isNavVisible, setIsNavVissible, navRef, isEnglish, setIsEnglish } =
    useAppContext();
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

  const content = isEnglish ? contentNavEnglish : contentNavSerbian;
  const { link1, link2, link3, link4, linkCTA } = content;

  return (
    <header
      ref={navRef}
      className='nav__header absolute top-0 left-0 w-full h-28 flex justify-between items-center sm:px-20 px-6 z-20'
    >
      <div className='logo flex gap-2 items-center z-20'>
        <Image
          src={logo}
          alt='Logo photo'
          className='logo cursor-pointer  h-32  w-44 mt-6'
          priority={true}
          onClick={handleBackHome}
        />
        <Image
          src={logoSub}
          alt='Logo text'
          className='cursor-pointer   h-16 w-auto'
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
        <ul className='flex flex-col lg:flex-row  gap-11 lg:gap-16 items-center mt-48 lg:mt-0  text-gray-600  lg:font-normal text-2xl lg:text-xl'>
          <li
            className='transition-all font-medium duration-300'
            onClick={() => setIsNavVissible(false)}
          >
            <Link
              href='/'
              className='hover:text-color-shade-main cursor-pointer'
            >
              {link1}
            </Link>
          </li>
          <li
            className='transition-all font-medium duration-300'
            onClick={() => setIsNavVissible(false)}
          >
            <Link
              className='hover:text-color-shade-main cursor-pointer'
              href='#howItWorks'
              scroll={true}
            >
              {link2}
            </Link>
          </li>
          <li className='transition-all font-medium duration-300'>
            <Link
              className='hover:text-color-shade-main cursor-pointer'
              href='#offers'
              onClick={() => setIsNavVissible(false)}
            >
              {link3}
            </Link>
          </li>
          <li className='transition-all font-medium duration-300'>
            <Link
              className='hover:text-color-shade-main cursor-pointer'
              href='#rentEquipment'
              onClick={() => setIsNavVissible(false)}
            >
              {link4}
            </Link>
          </li>

          <li className='flex gap-1 items-center'>
            <span
              className={clsx(
                'text-color-shadest text-base cursor-pointer font-medium',
                {
                  'text-color-accent-main': isEnglish,
                }
              )}
              onClick={(e) => setIsEnglish(true)}
            >
              ENG
            </span>
            <span>&nbsp;/&nbsp;</span>
            <span
              className={clsx(
                'text-color-shadest text-base cursor-pointer font-medium',
                {
                  'text-color-accent-main': !isEnglish,
                }
              )}
              onClick={(e) => setIsEnglish(false)}
            >
              MNE
            </span>
          </li>

          <li
            className='cursor-pointer'
            onClick={() => setIsNavVissible(false)}
          >
            <Link
              href='#contactForm'
              className='btn py-2 px-5 lg:py-3 lg:px-7  btn active:scale-95 transition-all, duration-300 rounded-full inline-flex items-center justify-center transition-color focus:outline-none cursor-pointer bg-color-accent-main hover:bg-color-shade-main text-white text-lg sm:text-xl font-semibold'
            >
              {linkCTA}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
