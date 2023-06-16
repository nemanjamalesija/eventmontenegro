'use client';
import { FC } from 'react';
import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';
import Image from 'next/image';
import { useAppContext } from '@/Provider/appContext';
import {
  reviewsContentEnglish,
  reviewsContentSerbian,
  reviewsGallery,
} from '@/constants/reviewsContent';

const Reviews: FC = () => {
  const { isEnglish } = useAppContext();
  const content = isEnglish ? reviewsContentEnglish : reviewsContentSerbian;
  const { sectionHeading, sectionSubheading, reviews } = content;

  return (
    <section className='py-16 lg:py-24 px-5 lg:px-8 bg-color-lightest border-b-2 border-white'>
      <div className='flex flex-col gap-y-24 lg:grid lg:grid-cols-2 lg:gap-x-20  lg:px-8 '>
        <div className='flex flex-col'>
          <div className='mb-16 lg:mb-24'>
            <h3
              className={clsx(
                josefinSans.className,
                'text-base font-bold tracking-wide uppercase text-color-accent-main mb-3'
              )}
            >
              {sectionHeading}
            </h3>
            <h4 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700'>
              {sectionSubheading}
            </h4>
          </div>
          <div className='reviews flex flex-col lg:grid lg:grid-cols-custom2fr gap-y-10  lg:gap-x-24 lg:gap-y-20'>
            {reviews.map((r, i) => {
              return (
                <div key={i} className='review'>
                  <div className='review__author mb-3 lg:mb-4 relative h-14 w-14'>
                    <Image
                      src={r.image}
                      alt={r.author}
                      fill
                      className='md:h-16 md:w-16 rounded-full object-cover'
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
        <div className='images grid grid-cols-3 gap-x-2 gap-y-2 lg:gap-x-4 lg:gap-y-4 h-[640px] lg:h-auto  lg:px-8'>
          {reviewsGallery.map((img, i) => {
            return (
              <div key={i} className='img__box relative overflow-hidden'>
                <Image
                  src={img.image}
                  alt={img.description}
                  fill
                  className='object-cover block transform hover:scale-110 transition-all duration-500 h-full w-full'
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
