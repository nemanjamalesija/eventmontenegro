import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';
import OfferToDispay from './OfferToDispay';
import OtherOffersIntro from './OtherOffersIntro';

const layout = () => {
  return (
    <section className='pt-24 pb-16 lg:pb-24 lg:px-10 bg-color-lightest'>
      <div className='mx-auto max-w-custom mt-10 lg:mt-14 px-5'>
        <OtherOffersIntro />
        <OfferToDispay />
      </div>
    </section>
  );
};

export default layout;
