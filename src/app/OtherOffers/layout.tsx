import OfferToDispay from './OfferToDisplay';
import Image from 'next/image';
import { srcArrayOtherOffers } from '../../../assets/img/otherOffers/otherOffers';
import PageGalleryHeading from '@/components/PageGalleryHeading';
import OtherOffersIntro from './OtherOffersIntro';

const layout = () => {
  return (
    <section className='pt-24 pb-16 lg:pb-24 lg:px-10 bg-color-lightest'>
      <div className='mx-auto max-w-custom mt-10 lg:mt-14 mb-16 lg:mb-24 px-5'>
        <OtherOffersIntro />
        <OfferToDispay />
      </div>
      <div className='photo__gallery'>
        <PageGalleryHeading />
        <div className='grid grid-cols-2 lg:grid-cols-4 h-[400px] gap-4 lg:gap-10 px-2 lg:px-8'>
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
