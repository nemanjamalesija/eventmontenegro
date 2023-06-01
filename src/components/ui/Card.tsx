import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import logoSub from '../../../assets/img/logo-sub.png';

type CardProps = {
  cardNumber: number;
  cardHeadingText: string;
  href: string;
};

const Card = ({ cardNumber, cardHeadingText, href }: CardProps) => {
  return (
    <div className='card'>
      <div
        className={`relative h-60 lg:h-80 bg-blend-screen bg-cover card__picture--${cardNumber}`}
      >
        &nbsp;
        <h4 className='card__heading text-2xl  lg:text-[1.8rem] text-white absolute left-0 bottom-2 lg:bottom-3 text-left uppercase'>
          <span
            className={`card__heading-span card__heading-span--${cardNumber} font-light py-2 px-4`}
          >
            {cardHeadingText}
          </span>
        </h4>
      </div>

      <div className='card__cta p-6 bg-white bg-center bg-blend-screen bg-no-repeat flex items-center justify-center'>
        <Image
          src={logoSub}
          className='card__image h-16 lg:h-full w-auto inline-block'
          alt='logo event montenegro'
        />
      </div>
      <div className='card__buttons p-8 flex items-center justify-center'>
        <Link
          className='card__link active:scale-95 transition-all, duration-300 rounded-full inline-flex items-center justify-center font-semibold transition-color focus:outline-none focus:ring-8 focus:ring-ring-color-primary focus:ring-offset-2 cursor-pointer px-6 py-2 sm:py-3 sm:px-6 text-base sm:text-xl  bg-white hover:bg-color-gray-light-1 text-gray-600 border-color-accent-main'
          href={href}
        >
          Saznajte više
        </Link>
      </div>
    </div>
  );
};

export default Card;
