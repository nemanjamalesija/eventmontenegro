import { FC } from 'react';
import logo from '../../../../assets/img/logo.png';
import logoSub from '../../../../assets/img/logo-sub.png';
import Image from 'next/image';
import clsx from 'clsx';
import styles from './nav.module.css';

const Navigation: FC = () => {
  // pocetna
  // Iznajmi opremu
  // Proslave
  // O nama

  return (
    <nav
      className={clsx(
        styles.nav,
        'w-full h-20 absolute top-0 flex items-center justify-between px-20'
      )}
    >
      <div className='w-1/2 flex gap-2 items-center'>
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
      <ul className='flex justify-between items-center flex-1  text-gray-600 font-medium text-lg'>
        <li className='nav__ul--item'>Početna</li>
        <li className='nav__ul--item'>O nama</li>
        <li className='nav__ul--item'>Iznajmi opremu</li>
        <li className='nav__ul--item'>Proslave</li>
        <li className='nav__ul--item'>
          <a
            href='#'
            className='inline-block py-2 px-10 font-medium bg-color-accent-main hover:bg-color-shade-main transition-all, duration-300 rounded-full text-white'
          >
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
