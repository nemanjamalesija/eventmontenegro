import { FC } from 'react';
import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';
import { gallery1, reviews } from '../../../assets/data/reviews';
import Image from 'next/image';

const Reviews: FC = () => {
  return (
    <section className='py-24 bg-color-lightest'>
      <div className='flex flex-col gap-y-24 lg:grid lg:grid-cols-custom2fr lg:gap-x-20 px-5 lg:px-8 mb-16 lg:mb-20'>
        <div className='flex flex-col'>
          <div className='mb-16 lg:mb-24'>
            <h3
              className={clsx(
                josefinSans.className,
                'text-base font-bold tracking-wide uppercase text-color-accent-main mb-3'
              )}
            >
              Utisci korisnika
            </h3>
            <h4 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700'>
              Projekat ostvaren sa nama se ne zaboravlja
            </h4>
          </div>
          <div className='reviews flex flex-col lg:grid lg:grid-cols-custom2fr gap-y-10  lg:gap-x-24 lg:gap-y-20'>
            {reviews.map((r, i) => {
              return (
                <div key={i} className='review'>
                  <div className='review__author mb-3 lg:mb-4'>
                    <Image
                      src={r.image}
                      alt={r.author}
                      className='h-14 w-14  md:h-16 md:w-16 rounded-full object-cover'
                    />
                  </div>
                  <p className='review__text mb-4 md:mb-6 text-base md:text-lg text-gray-700'>
                    {r.text}
                  </p>
                  <span className='review__author text-sm  md:text-base text-gray-600'>
                    {r.author}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='images grid grid-cols-custom3fr gap-x-2 gap-y-2 lg:gap-x-4 lg:gap-y-4 h-[580px] lg:h-auto px-5 lg:px-8'>
        {gallery1.map((img, i) => {
          return (
            <div key={i} className='img__box relative overflow-hidden'>
              <Image
                src={img.image}
                alt={img.description}
                fill={true}
                className='object-cover block transform hover:scale-110 transition-all duration-500 h-full w-full'
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Reviews;
