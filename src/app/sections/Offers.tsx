import { FC } from 'react';
import Card from '@/components/ui/Card';

const Offers: FC = () => {
  return (
    <section className='py-24 px-5 lg:px-10'>
      <div className='flex flex-col gap-y-24 lg:grid lg:grid-cols-custom3fr lg:gap-x-20 mx-auto max-w-custom px-5 lg:px-0 '>
        <Card cardNumber={1} cardHeadingText={'vjenčanja'} />
        <Card cardNumber={2} cardHeadingText={'poslovni događaji'} />
        <Card cardNumber={3} cardHeadingText={'dječije proslave'} />
        <Card cardNumber={4} cardHeadingText={'ostale proslave'} />
        <Card cardNumber={5} cardHeadingText={'dodatne usluge'} />
      </div>
    </section>
  );
};

export default Offers;
