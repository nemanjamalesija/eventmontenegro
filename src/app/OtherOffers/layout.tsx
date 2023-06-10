import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';
import OfferToDispay from './OfferToDisplay';
import Image from 'next/image';
import { srcArrayOtherOffers } from '../../../assets/img/otherOffers/otherOffers';

const layout = async () => {
  return (
    <section className='py-24 border-t-2 border-b-2 border-white'>
      <div className='mx-auto max-w-custom px-5 lg:px-10 '>
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
          bg-cover bg-center lg:bg-top mb-16 lg:mb-20'
        ></div>
        <div className='kids__text-box flex flex-col lg:grid grid-cols-2 gap-x-24 gap-8'></div>
        <OfferToDispay />
      </div>
      <div className='p__gallery'>
        <h5
          className={clsx(
            josefinSans.className,
            'text-2xl lg:text-3xl text-color-accent-main font-semibold mb-4 lg:mb-5 text-center'
          )}
        >
          Foto galerija
        </h5>
        <div className='p__gallery grid grid-cols-2 lg:grid-cols-4 h-[400px] gap-4 lg:gap-10 px-2 lg:px-8'>
          {srcArrayOtherOffers.map((off, i) => {
            return (
              <figure key={i} className='relative h-full '>
                <Image
                  src={off}
                  alt='Other offers of Event Montenegro'
                  fill
                  className='block object-cover'
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default layout;
