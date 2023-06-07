'use client';
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import logoSub from '../../../assets/img/logo-sub.png';
import { useAppContext } from '@/Provider/appContext';

type CardProps = {
  cardNumber: number;
  cardHeadingText: string;
  href: string;
};

const Card = ({ cardNumber, cardHeadingText, href }: CardProps) => {
  const { navRef } = useAppContext();

  const removeNavSticky = () => {
    navRef.current?.classList.remove('sticky');
  };

  return (
    <div className='card '>
      <h4 className='card__heading text-lg sm:text-xl font-medium tracking-wide uppercase text-color-accent-main mb-3'>
        {cardHeadingText}
      </h4>
      <div
        className={`card-photo h-96 
          bg-cover bg-center lg:bg-top card__picture--${cardNumber}`}
      >
        &nbsp;
      </div>
      <div className='card__cta bg-center  bg-no-repeat flex items-center justify-center '></div>
      <div className='btn'>
        <Link href={href}>
          <button
            className='card__link active:scale-95 transition-all, duration-300 block items-center justify-center font-semibold transition-color focus:outline-none focus:ring-8 focus:ring-ring-color-primary focus:ring-offset-2 cursor-pointer px-7 py-4  w-full bg-white hover:bg-color-gray-light-1  border-color-accent-main  text-white text-base sm:text-lg uppercase'
            onClick={removeNavSticky}
          >
            Saznajte više
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
