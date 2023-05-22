import { FC } from 'react';
import logo from '../../../../assets/img/logo.png';
import logoSub from '../../../../assets/img/logo-sub.png';
import Image from 'next/image';

const Navigation: FC = () => {
  // pocetna
  // Iznajmi opremu
  // Proslave
  // O nama

  return (
    <nav className='w-full h-20 absolute top-0  flex items-center justify-between px-20'>
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
      <ul className='flex justify-between items-center flex-1  text-gray-600'>
        <li className='nav__ul--item'>Početna</li>
        <li className='nav__ul--item'>O nama</li>
        <li className='nav__ul--item'>Iznajmi opremu</li>
        <li className='nav__ul--item'>Proslave</li>
        <li className='nav__ul--item'>
          <a
            href='#'
            className='inline-block py-2 px-10 font-medium bg-purple-400 hover:bg-purple-500 transition-all, duration-300 rounded-full text-gray-800'
          >
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
