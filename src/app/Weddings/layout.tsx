import Gallery from '@/components/ui/Gallery';
import { srcArrayDoroteaLuka } from '../../../assets/img/weddings/doroteaLuka/doroteaLuka';
import { srcArrayJelenaVlado } from '../../../assets/img/weddings/jelenaVlado/jeleVlado';
import { srcImagesSaraMichelle } from '../../../assets/img/weddings/saraMichelle/saraMichelle';
import { srcArrayTijanaMilo } from '../../../assets/img/weddings/tijanaMilo/tijanaMilo';
import PageGalleryHeading from '@/components/PageGalleryHeading';
import WeddingsContent from './WeddingsContent';

const srcArrayWeddings = [
  ...srcArrayDoroteaLuka,
  ...srcArrayJelenaVlado,
  ...srcArrayTijanaMilo,
  ...srcImagesSaraMichelle,
];

const layout = () => {
  return (
    <section className='pt-24 pb-16 lg:pb-24 lg:px-10 bg-color-lightest'>
      <div className='mx-auto max-w-custom mt-10 lg:mt-14 mb-16 lg:mb-24 px-5'>
        <WeddingsContent />
      </div>
      <div className='p__gallery px-2 lg:px-8'>
        <PageGalleryHeading />
        <Gallery srcArray={srcArrayWeddings} />
      </div>
    </section>
  );
};

export default layout;
