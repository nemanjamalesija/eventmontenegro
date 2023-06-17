'use client';
import { FC } from 'react';
import { Flower, PartyPopper } from 'lucide-react';
import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';
import { useAppContext } from '@/Provider/appContext';
import {
  pageOtherOffersContentEnglish,
  pageOtherOffersContentSerbian,
} from '@/constants/offersContent';

const OtherOffersIntro: FC = () => {
  const { isEnglish } = useAppContext();

  const content = isEnglish
    ? pageOtherOffersContentEnglish
    : pageOtherOffersContentSerbian;
  const { firstColLeftP, firstColLeftH, firstColRightH, firstColRightP } =
    content;

  return (
    <div className='kids__text-box flex flex-col lg:grid grid-cols-2 gap-x-24 gap-8 mb-12 lg:mb-16'>
      <h2
        className={clsx(
          josefinSans.className,
          'text-3xl md:text-4xl  font-semibold text-gray-600 mb-4 lg:mb-6'
        )}
      >
        {isEnglish ? 'Other events' : ' Ostale proslave'}
      </h2>

      <div
        className='other-celebrations__img-box h-[40vh] w-full bg-blend-screen
          bg-cover bg-center lg:bg-top mb-12 lg:mb-16'
      ></div>
      <div className='kids__text '>
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
        <p className='text-base lg:text-lg text-gray-700'>{firstColLeftP}</p>
      </div>

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
        <p className='text-base lg:text-lg  text-gray-700'>{firstColRightP}</p>
      </div>
    </div>
  );
};

export default OtherOffersIntro;
