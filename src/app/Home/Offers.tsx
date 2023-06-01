import { FC } from 'react';
import Card from '@/components/ui/Card';
import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';

const Offers: FC = () => {
  return (
    <section className='py-24 px-5 lg:px-10'>
      <div className='mx-auto max-w-custom px-5 lg:px-0 '>
        <div className='mb-16 lg:mb-24'>
          <h2
            className={clsx(
              josefinSans.className,
              'text-base font-bold tracking-wide uppercase text-color-accent-main mb-3'
            )}
          >
            Ponude
          </h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700'>
            Pretvorimo zajedno vašu viziju u stvarnost
          </h3>
        </div>
        <div className='flex flex-col gap-y-24 lg:grid lg:grid-cols-custom3fr lg:gap-x-20 '>
          <Card
            cardNumber={1}
            cardHeadingText={'vjenčanja'}
            href={'Weddings'}
          />
          <Card
            cardNumber={2}
            cardHeadingText={'poslovni događaji'}
            href={'BusinessEvents'}
          />
          <Card
            cardNumber={3}
            cardHeadingText={'dječije proslave'}
            href={'KidsEvents'}
          />
          <Card
            cardNumber={4}
            cardHeadingText={'ostale proslave'}
            href={'OtherEvents'}
          />
          <Card
            cardNumber={5}
            cardHeadingText={'dodatne usluge'}
            href={'OtherOffers'}
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;
