'use client';

import clsx from 'clsx';
import { Flower, PartyPopper } from 'lucide-react';
import { josefinSans } from '../../../utils/fonts';
import rodjendanDisplay from '../../../assets/img/kidsEvents/birthdays/rodjendanDisplay.jpg';
import animacijeDisplay from '../../../assets/img/kidsEvents/animations/animacijeDisplay.jpg';
import Image from 'next/image';
import { useAppContext } from '@/Provider/appContext';
import {
  kidsEventsContentEnglish,
  kidsEventsContentSerbian,
} from '@/constants/kidsEventsContent';
import { FC } from 'react';

const KidsIntro: FC = () => {
  const { isEnglish } = useAppContext();

  const content = isEnglish
    ? kidsEventsContentEnglish
    : kidsEventsContentSerbian;

  const { firstColLeftP, firstColLeftH, firstColRightH, firstColRightP } =
    content;

  return (
    <div>
      <h2
        className={clsx(
          josefinSans.className,
          'text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mb-4 lg:mb-6'
        )}
      >
        Dječije proslave
      </h2>

      <div
        className='kids__img-box h-[40vh] w-full bg-blend-screen
        bg-cover bg-center lg:bg-top mb-16 lg:mb-24'
      ></div>

      <div className='step flex flex-col lg:grid lg:grid-cols-2 justify-between items-center gap-12 lg:gap-24 mb-12 lg:mb-24'>
        <div className='kids__text'>
          <div className='flex items-center gap-4 mb-4'>
            <div className='kids__icons-set flex items-center justify-center rounded-full h-14 w-14 lg:h-16 lg:w-16 bg-color-accent-main'>
              {<Flower className='stroke-color-gray-light-1' />}
            </div>
            <h3
              className={clsx(
                josefinSans.className,
                'text-xl text-color-accent-main font-semibold'
              )}
            >
              {firstColLeftH}
            </h3>
          </div>
          <p className='lg:leading-9 text-base lg:text-lg text-gray-700'>
            {firstColLeftP}
          </p>
        </div>
        <figure className='relative lg:flex lg:justify-end'>
          <Image
            src={rodjendanDisplay}
            alt='Photo showing decoration example'
            className='block object-cover rounded-md'
            width={500}
            height={500}
          />
        </figure>
      </div>
      <div className='step flex flex-col lg:grid lg:grid-cols-2 items-center gap-12 lg:gap-30 mb-16 lg:mb-24'>
        <figure className='relative lg:flex justify-start'>
          <Image
            src={animacijeDisplay}
            alt='Photo showing decoration example'
            className='block object-cover rounded-md'
            width={500}
            height={500}
          />
        </figure>
        <div className='kids__text'>
          <div className='flex items-center gap-4 mb-4'>
            <div className='kids__icons-set flex items-center justify-center rounded-full h-14 w-14 lg:h-16 lg:w-16 bg-color-accent-main'>
              {<PartyPopper className='stroke-color-gray-light-1' />}
            </div>
            <h3
              className={clsx(
                josefinSans.className,
                'text-xl text-color-accent-main font-semibold'
              )}
            >
              {firstColRightH}
            </h3>
          </div>

          <p className='lg:leading-9 text-base lg:text-lg text-gray-700'>
            {firstColRightP}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KidsIntro;
