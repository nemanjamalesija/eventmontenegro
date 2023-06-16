'use client';
import React from 'react';
import Link from 'next/link';
import { useAppContext } from '@/Provider/appContext';
import clsx from 'clsx';
import { josefinSans } from '../../../utils/fonts';

type CardProps = {
  cardNumber: number;
  cardHeadingText: string;
  href: string;
};

const Card = ({ cardNumber, cardHeadingText, href }: CardProps) => {
  const { navRef, isEnglish } = useAppContext();

  const removeNavSticky = () => {
    navRef.current?.classList.remove('sticky');
    navRef.current?.classList.add('regular');
  };

  return (
    <div className='card '>
      <h4
        className={clsx(
          josefinSans.className,
          'text-lg text-center font-medium uppercase  text-color-accent-main mb-3'
        )}
      >
        {cardHeadingText}
      </h4>
      <div
        className={`card-photo h-96 
          bg-cover bg-center lg:bg-top card__picture--${cardNumber}`}
      >
        &nbsp;
      </div>
      <div className='card__cta bg-center  bg-no-repeat flex items-center justify-center '></div>
      <div>
        <Link href={href}>
          <button
            className='btnY active:scale-95 hover:scale-y-110 transition-all duration-300 block font-semibold transition-color focus:outline-none cursor-pointer px-7 py-4 w-full bg-color-accent-main hover:bg-color-shade-main text-white text-base sm:text-lg uppercase'
            onClick={removeNavSticky}
          >
            {isEnglish ? 'Learn more' : 'Saznajte više'}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
