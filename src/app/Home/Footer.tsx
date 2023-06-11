import { Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer py-24  bg-color-accent-darkest flex flex-col items-center justify-center relative'>
      <div className='footer__logo flex gap-2 items-center mb-6'></div>
      <div className='imgs'></div>
      <div className='footer__company-adress mb-3'>
        <p className='text-base lg:text-lg text-color-gray-light-1'>
          City Kvart L7, 81000 Podgorica, Crna Gora
        </p>
      </div>

      <div className='footer__company-mail mb-3'>
        <p className='text-base lg:text-lg  text-color-gray-light-1'>
          info@eventmontenegro.com
        </p>
      </div>
      <div className='footer__company-phone flex gap-2 items-center mb-3'>
        <div className='footer__company-phone-icon'>
          <Phone className='h-6  w-6 stroke-color-gray-light-1' />
        </div>
        <p className='text-base lg:text-lg  text-color-gray-light-1'>
          +382 69 258 080
        </p>
      </div>
      <div className='footer__navigation'>
        <ul className='footer__list flex gap-4'>
          <li className='footer__item'>
            <Link href='#contact'>
              <Instagram className='h-7  w-7 stroke-color-gray-light-1' />
            </Link>
          </li>
          <li className='footer__item'>
            <Link href='#contact'>
              <Mail className='h-7  w-7 stroke-color-gray-light-1' />
            </Link>
          </li>
        </ul>
      </div>
      <p className='copyright text-xs lg:text-sm text-color-gray-light-1 absolute bottom-0 p-1'>
        Copyright © 2023 Nemanja Malesija
      </p>
    </footer>
  );
};

export default Footer;
