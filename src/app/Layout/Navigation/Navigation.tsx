import { FC } from 'react';
import logo from '../../../../assets/img/logo.png';
import logoSub from '../../../../assets/img/logo-sub.png';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './nav.module.css';
import { X, AlignJustify } from 'lucide-react';

/*-translate-x-full */

const Navigation: FC = () => {


  return (
    <header
      className={clsx(
        styles.header,
        'nav__header col-start-2 row-start-1 col-span-2 flex justify-between items-center h-20 sm:pr-20 sm:pl-20 px-10X z-50'
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
      <div className='sm:hidden'>
        <AlignJustify />
      </div>
      <nav
        className={clsx(
          styles.nav,
          'nav flex flex-col sm-flex-row items-center justify-center sm:static absolute top-0 left-0 w-full h-full sm:w-auto sm:h-auto z-50 '
        )}
      >
        <button className='sm:hidden absolute top-5 right-10 '>
          <X className='h-10 w-10 stroke-slate-700' />
        </button>

        <ul className='flex flex-col sm:flex-row gap-11 sm:gap-16 items-center text-gray-600 font-bold sm:font-medium text-2xl sm:text-xl'>
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
