import { ReactNode } from 'react';
import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';
import OfferToDispay from './OfferToDisplay';

type LayoutProps = {
  children: ReactNode;
};

const layout = async ({ children }: LayoutProps) => {
  return (
    <section className='py-24 lg:px-10 bg-color-lightest border-t-2 border-b-2 border-white'>
      <div className='mx-auto max-w-custom px-4 lg:px-0 mt-6'>
        <h2
          className={clsx(
            josefinSans.className,
            'text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mb-4 lg:mb-6'
          )}
        >
          Dodatne usluge
        </h2>

        <div
          className='other-offers__img-box h-[40vh] w-full bg-blend-screen
          bg-cover bg-center lg:bg-top mb-12 lg:mb-16'
        ></div>
        <div className='kids__text-box flex flex-col lg:grid grid-cols-2 gap-x-24 gap-8 mb-12 lg:mb-16'></div>
        <OfferToDispay />
      </div>
    </section>
  );
};

export default layout;
