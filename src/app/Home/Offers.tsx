'use client';
import { FC } from 'react';
import Card from '@/components/ui/Card';
import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';
import { useAppContext } from '@/Provider/appContext';
import {
  offersContentEnglish,
  offersContentSerbian,
} from '@/constants/offersContent';

const Offers: FC = () => {
  const { isEnglish } = useAppContext();
  const content = isEnglish ? offersContentEnglish : offersContentSerbian;

  const {
    sectionTitle,
    sectionSubheading,
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
  } = content;

  return (
    <section
      id='offers'
      className='py-16 lg:py-24  border-b-2 border-white lg:px-10 '
    >
      <div className='mx-auto max-w-custom px-5 '>
        <div className='mb-16 lg:mb-24'>
          <h3
            className={clsx(
              josefinSans.className,
              'text-base font-bold tracking-wide uppercase text-color-accent-main mb-3'
            )}
          >
            {sectionTitle}
          </h3>
          <h4 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700'>
            {sectionSubheading}
          </h4>
        </div>
        <div className='flex flex-col gap-16 lg:gap-y-24 lg:grid lg:grid-cols-custom3fr lg:gap-x-20 '>
          <Card cardNumber={1} cardHeadingText={card1} href={'Weddings'} />
          <Card
            cardNumber={2}
            cardHeadingText={card2}
            href={'BusinessEvents'}
          />
          <Card cardNumber={3} cardHeadingText={card3} href={'KidsEvents'} />
          <Card cardNumber={4} cardHeadingText={card4} href={'Balloons'} />
          <Card cardNumber={5} cardHeadingText={card5} href={'OtherEvents'} />
          <Card cardNumber={6} cardHeadingText={card6} href={'OtherOffers'} />
        </div>
      </div>
    </section>
  );
};

export default Offers;
