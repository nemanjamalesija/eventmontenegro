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
    <div className='card'>
      <div
        className={`relative h-60 lg:h-80 bg-blend-screen
          bg-cover bg-center lg:bg-top card__picture--${cardNumber}`}
      >
        &nbsp;
        <h4 className='card__heading text-xl lg:text-2xl   text-white absolute left-0 bottom-[6px] lg:bottom-2  text-left uppercase'>
          <span
            className={`card__heading-span card__heading-span--${cardNumber} font-light py-2 px-4`}
          >
            {cardHeadingText}
          </span>
        </h4>
      </div>

      <div className='card__cta pt-20 pb-8 bg-center bg-blend-screen bg-no-repeat flex items-center justify-center'>
        <Link href={href}>
          <button
            className='card__link active:scale-95 transition-all, duration-300 rounded-full inline-flex items-center justify-center font-semibold transition-color focus:outline-none focus:ring-8 focus:ring-ring-color-primary focus:ring-offset-2 cursor-pointer px-4 py-2 text-base sm:text-lg  bg-white hover:bg-color-gray-light-1 text-gray-600 border-color-accent-main'
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
