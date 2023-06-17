import Gallery from '@/components/ui/Gallery';
import { srcArrayHomeSystems } from '../../../assets/img/businessEvents/homeSystems/homeSystems';
import { srcArrayVolvo } from '../../../assets/img/businessEvents/volvo/volvo';
import { srcArrayWinter } from '../../../assets/img/businessEvents/winter/winter';
import BusinessEventsIntro from './BusinessEventsIntro';
import PageGalleryHeading from '@/components/PageGalleryHeading';

const srcArrayGallery = [
  ...srcArrayVolvo,
  ...srcArrayHomeSystems,
  ...srcArrayWinter,
];

const layout = () => {
  return (
    <section className='pt-24 pb-16 lg:pb-24 lg:px-10 bg-color-lightest'>
      <div className='mx-auto max-w-custom mt-10 lg:mt-14 mb-16 lg:mb-24 px-5'>
        <BusinessEventsIntro />
      </div>
      <div className='p__gallery px-2 lg:px-8'>
        <PageGalleryHeading />
        <Gallery srcArray={srcArrayGallery} />
      </div>
    </section>
  );
};

export default layout;
