import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoSub from '../../../assets/img/logo-sub.png';

type CardProps = {
  cardNumber: number;
  cardHeadingText: string;
};

const Card = ({ cardNumber, cardHeadingText }: CardProps) => {
  return (
    <div className='card relative'>
      <div className={`card__picture card__picture--${cardNumber}`}>&nbsp;</div>
      <h4 className='card__heading'>
        <span
          className={`card__heading-span card__heading-span--${cardNumber} capitalize`}
        >
          {cardHeadingText}
        </span>
      </h4>
      <div className='card__cta relative'>
        <Image
          src={logoSub}
          className='card__image h-full w-auto'
          alt='logo event montenegro'
        />
      </div>
      <div className='card__buttons flex items-center justify-center'>
        <Link
          className='card__link active:scale-95 transition-all, duration-300 rounded-full inline-flex items-center justify-center font-semibold transition-color focus:outline-none focus:ring-8 focus:ring-ring-color-primary focus:ring-offset-2 cursor-pointer px-4 py-2 sm:py-3 sm:px-6 sm:text-xl bg-white hover:bg-color-gray-light-1 text-gray-600 border-color-accent-main'
          href='/vjencanja'
        >
          Saznajte više
        </Link>
      </div>
    </div>
  );
};

export default Card;
