import clsx from 'clsx';
import { Flower, PartyPopper } from 'lucide-react';
import { josefinSans } from '../../../utils/fonts';
import OfferToDisplay from './OfferToDisplay';
import { animationImages } from '../../../assets/img/kidsEvents/animations/animationsImages';
import ImageGallery from 'react-image-gallery';
import { birthdayImages } from '../../../assets/img/kidsEvents/birthdays/birthdaysImages';
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
          Dječije proslave
        </h2>

        <div
          className='kids__img-box h-[40vh] w-full bg-blend-screen
          bg-cover bg-center lg:bg-top mb-12 lg:mb-16'
        ></div>
        <div className='kids__text-box flex flex-col lg:grid grid-cols-2 gap-x-24 gap-8 mb-12 lg:mb-16'>
          <div className='kids__text '>
            <div className='flex items-center gap-4 mb-4'>
              <div className='kids__icons-set flex items-center justify-center rounded-full h-14 w-14 lg:h-16 lg:w-16 bg-color-accent-main'>
                {<Flower className='stroke-color-gray-light-1' />}
              </div>
              <h3
                className={clsx(
                  josefinSans.className,
                  'text-xl text-color-accent-main font-semibold'
                )}
              >
                Dekoracija
              </h3>
            </div>
            <p className='text-base lg:text-lg text-gray-700'>
              Izaberite temu rođendana ili druge diječije proslave, a mi ćemo
              kreirati dekoraciju koja će oduševiti sve prisutne. Slatki sto
              predstavlja centralni dio dekoracije, zato se trudimo da svaki
              detalj na njemu bude savršeno uklopljen. Baloni su nezaobilazni
              dio dekoracije, a djeca im se najviše raduju. Dopustite nam da
              uljepšamo Vaš poseban dan i učinimo ga neponovljivim.
            </p>
          </div>

          <div className='kids__text'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='kids__icons-set flex items-center justify-center rounded-full h-14 w-14 lg:h-16 lg:w-16 bg-color-accent-main'>
                {<PartyPopper className='stroke-color-gray-light-1' />}
              </div>
              <h3
                className={clsx(
                  josefinSans.className,
                  'text-xl text-color-accent-main font-semibold'
                )}
              >
                Animacija
              </h3>
            </div>
            <p className='text-base lg:text-lg  text-gray-700'>
              Animacija djece je odlično rješenje za sve vrste proslava u kojima
              prisustvuju djeca. Naši animatori osmišljavaju program koji je
              zabavan, veseo i prilagođen Vašoj proslavi. Gdje god da pravite
              zabavu, u restoranu, hotelu, igraonici ili u kući, naš veseli tim
              dolazi kod Vas i donosi puno igre, smjeha i dobrog raspoloženja.
              Uz naše animatore djeca će se osjećati sigurno, zadovoljno i
              srećno.
            </p>
          </div>
        </div>
        <div className='kids__celeb-categories mb-12 lg:mb-16'>
          <h5
            className={clsx(
              josefinSans.className,
              'text-xl text-color-accent-main font-semibold mb-3'
            )}
          >
            Saznajte više:
          </h5>
          <OfferToDisplay />
        </div>
        <div className='kids__galleries'>
          <div className='gallery__wrapper mb-12 lg:mb-16'>
            <h5
              className={clsx(
                josefinSans.className,
                'text-lg lg:text-2xl text-color-accent-main font-semibold lg:mb-3 text-center'
              )}
            >
              Animacije
            </h5>
            <ImageGallery
              items={animationImages}
              showPlayButton={false}
              showFullscreenButton={false}
              slideOnThumbnailOver={true}
              showIndex={true}
            />
          </div>
          <div className='gallery__wrapper mb-12 lg:mb-16'>
            <h5
              className={clsx(
                josefinSans.className,
                'text-2xl text-color-accent-main font-semibold mb-5 lg:mb-3 text-center '
              )}
            >
              Rođendani
            </h5>
            <Gallery images={birthdayImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default layout;
