import OfferToDisplay from './OfferToDisplay';
import KidsIntro from './KidsIntro';
import KidsGallery from './KidsGallery';

const layout = () => {
  return (
    <section className='py-24'>
      <div className='mx-auto max-w-custom mt-10 lg:mt-14'>
        <KidsIntro />
        <OfferToDisplay />
        <KidsGallery />
      </div>
    </section>
  );
};

export default layout;
