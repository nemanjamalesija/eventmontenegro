import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';
import OfferToDispay from './OfferToDisplay';
import { otherOfferImages } from '../../../assets/img/otherOffers/otherOffers';
import Gallery from '@/components/ui/Gallery';

const layout = async () => {
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
      <div className='gallery__other-offers-wrapper'>
        <h5
          className={clsx(
            josefinSans.className,
            'text-lg lg:text-2xl text-color-accent-main font-semibold lg:mb-3 text-center'
          )}
        >
          Foto galerija
        </h5>
        <Gallery images={otherOfferImages} />
      </div>
    </section>
  );
};

export default layout;
