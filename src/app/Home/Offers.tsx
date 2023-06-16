import { FC } from 'react';
import Card from '@/components/ui/Card';
import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';

type OffersProps = {
  content: {
    sectionTitle: string;
    sectionSubheading: string;
    card1: string;
    card2: string;
    card3: string;
    card4: string;
    card5: string;
  };
};

const Offers: FC<OffersProps> = ({ content }) => {
  const { sectionTitle, sectionSubheading, card1, card2, card3, card4, card5 } =
    content;

  return (
    <section id='offers' className='py-24  border-b-2 border-white lg:px-10 '>
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
        <div className='flex flex-col gap-y-24 lg:grid lg:grid-cols-custom3fr lg:gap-x-20 '>
          <Card cardNumber={1} cardHeadingText={card1} href={'Weddings'} />
          <Card
            cardNumber={2}
            cardHeadingText={card2}
            href={'BusinessEvents'}
          />
          <Card cardNumber={3} cardHeadingText={card3} href={'KidsEvents'} />
          <Card cardNumber={4} cardHeadingText={card4} href={'OtherEvents'} />
          <Card cardNumber={5} cardHeadingText={card5} href={'OtherOffers'} />
        </div>
      </div>
    </section>
  );
};

export default Offers;
