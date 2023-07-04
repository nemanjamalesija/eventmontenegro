import OfferToDisplay from './OfferToDisplay';
import KidsIntro from './KidsIntro';
import KidsGallery from './KidsGallery';

const layout = () => {
  return (
    <section className='pt-24 pb-16 lg:pb-24 lg:px-10 bg-color-lightest'>
      <div className='mx-auto max-w-custom mt-10 lg:mt-14 mb-16 lg:mb-24 px-5'>
        <KidsIntro />
        <OfferToDisplay />
        <div>
          <a href='#'>Saznajte jos vise na nasoj instagram stranici</a>
        </div>
        <KidsGallery />
      </div>
    </section>
  );
};

export default layout;
