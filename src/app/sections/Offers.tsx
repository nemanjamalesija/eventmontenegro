import CustomLink from '@/components/ui/CustomLink';
import Link from 'next/link';
import { FC } from 'react';
import vjencanja from '../../../assets/img/cards/vjencanja.jpg';
import Card from '@/components/ui/Card';

const Offers: FC = () => {
  return (
    <section className='py-24 px-5 lg:px-10'>
      <div className='flex flex-col gap-y-24 lg:grid lg:grid-cols-custom3fr lg:gap-x-20 mx-auto max-w-custom px-5 lg:px-0 '>
        <Card cardNumber={1} cardHeadingText={'vjenčanja'} />
        <Card cardNumber={1} cardHeadingText={'vjenčanja'} />
        <Card cardNumber={1} cardHeadingText={'vjenčanja'} />
        <Card cardNumber={1} cardHeadingText={'vjenčanja'} />
        <Card cardNumber={1} cardHeadingText={'vjenčanja'} />
        <Card cardNumber={1} cardHeadingText={'vjenčanja'} />
      </div>
    </section>
  );
};

export default Offers;
