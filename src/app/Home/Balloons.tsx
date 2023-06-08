'use client';
import { FC, useState } from 'react';
import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import { cn } from '../../../utils/twinMerge';
import '../gallery.css';
import {
  balloonCategories,
  balloonsContent,
} from '../../../assets/data/balloons';
import Gallery from '@/components/ui/Gallery';
import { ballons } from '../../../assets/img/baloni/baloniImages';
import Image from 'next/image';

const srcArray = [
  ballons.baloni2.src,
  ballons.baloni35.src,
  ballons.baloni5.src,
  ballons.baloni6.src,
  ballons.baloni7.src,
  ballons.baloni8.src,
  ballons.baloni9.src,
  ballons.baloni10.src,
  ballons.baloni12.src,
  ballons.baloni13.src,
  ballons.baloni14.src,
  ballons.baloni16.src,
  ballons.baloni4.src,
  ballons.baloni18.src,
  ballons.baloni19.src,
  ballons.baloni29.src,
  ballons.baloni28.src,
  ballons.baloni23.src,
  ballons.baloni24.src,
  ballons.baloni25.src,
  ballons.baloni26.src,
  ballons.baloni27.src,
  ballons.baloni21.src,
  ballons.baloni20.src,
  ballons.baloni30.src,
  ballons.baloni31.src,
];

const Balloons: FC = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <section
      id='balloons'
      className='py-24 lg:px-10 border-t-2 border-b-2 border-white'
    >
      <div className='mx-auto max-w-custom px-4 lg:px-0'>
        <div className='mb-8 lg:mb-12'>
          <h3
            className={clsx(
              josefinSans.className,
              'text-base font-bold tracking-wide uppercase text-color-accent-main mb-3'
            )}
          >
            Baloni
          </h3>
          <h4 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700'>
            Dekoracija, isporuka, ispuštanje i štampa balona
          </h4>
        </div>
        <div
          className='balloons__img-box h-[40vh] w-full bg-blend-screen
          bg-cover'
        ></div>
        <div className='balloons__content'>
          <div className='balloons__buttons flex items-center justify-between lg:justify-center gap-0 lg:gap-10 -translate-y-6 mb-4 lg:mb-8'>
            {balloonCategories.map((cat, i) => {
              return (
                <button
                  key={i}
                  className={cn(
                    'active:scale-95 transition-all, duration-300 rounded-full inline-flex items-center justify-center font-semibold transition-all focus:outline-none focus:ring-8 focus:ring-ring-color-primary focus:ring-offset-2 cursor-pointer px-2 py-1 sm:py-3 sm:px-6 text-base sm:text-xl bg-color-accent-main hover:bg-color-shade-main text-white',
                    { '-translate-y-2': i === categoryIndex }
                  )}
                  onClick={() => setCategoryIndex(i)}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <div className=' balloons__text mx-auto mb-12 lg:mb-16'>
            <p className='text-base lg:text-lg text-gray-700 mb-12 lg:mb-16'>
              {balloonsContent[categoryIndex].categoryContent}
            </p>
            <ul className=' balloons__offer list-none flex flex-col'>
              {balloonsContent[categoryIndex].offer && (
                <div className='flex flex-col justify-center items-center'>
                  <h4
                    className={clsx(
                      josefinSans.className,
                      'text-lg lg:text-2xl font-medium text-color-accent-main mb-3'
                    )}
                  >
                    U ponudi imamo:
                  </h4>
                  <div className='balloons__offer-box modal py-6 px-8 rounded-md w-fit lg:w-full flex flex-col gap-3 lg:grid grid-cols-3 lg:justify-between'>
                    {balloonsContent[categoryIndex]?.offer?.map((off, i) => (
                      <li
                        key={i}
                        className='list__item flex items-center gap-2 text-center text-color-accent-darkest text-base lg:text-lg'
                      >
                        <Check className='stroke-color-accent-main' />
                        {off}
                      </li>
                    ))}
                  </div>
                </div>
              )}
            </ul>
          </div>
          <div className='photo__gallery'>
            <h4
              className={clsx(
                josefinSans.className,
                'text-lg lg:text-2xl font-medium text-color-accent-main mb-3 lg:mb-6 text-center'
              )}
            >
              Foto galerija
            </h4>
          </div>
        </div>
      </div>
      <Gallery srcArray={srcArray} />;
    </section>
  );
};

export default Balloons;
