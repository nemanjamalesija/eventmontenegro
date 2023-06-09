import clsx from 'clsx';
import { Flower, PartyPopper } from 'lucide-react';
import { josefinSans } from '../../../utils/fonts';
import OfferToDisplay from './OfferToDisplay';
import Gallery from '@/components/ui/Gallery';
import { srcArrayAnimations } from '../../../assets/img/kidsEvents/animations/animationsImages';
import { srcArrayBirthdays } from '../../../assets/img/kidsEvents/birthdays/birthdaysImages';
import rodjendanDisplay from '../../../assets/img/kidsEvents/birthdays/rodjendanDisplay.jpg';
import animacijeDisplay from '../../../assets/img/kidsEvents/animations/animacijeDisplay.jpg';
import Image from 'next/image';

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
          bg-cover bg-center lg:bg-top mb-16 lg:mb-24'
        ></div>

        <div className='step flex flex-col lg:grid lg:grid-cols-2 items-center gap-12 lg:gap-24 mb-12 lg:mb-24'>
          <div className='kids__text'>
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
            <p className='lg:leading-9 text-base lg:text-lg text-gray-700'>
              Izaberite temu rođendana ili druge diječije proslave, a mi ćemo
              kreirati dekoraciju koja će oduševiti sve prisutne. Slatki sto
              predstavlja centralni dio dekoracije, zato se trudimo da svaki
              detalj na njemu bude savršeno uklopljen. Baloni su nezaobilazni
              dio dekoracije, a djeca im se najviše raduju. Dopustite nam da
              uljepšamo Vaš poseban dan i učinimo ga neponovljivim.
            </p>
          </div>
          <figure className='relative'>
            <Image
              src={rodjendanDisplay}
              alt='Photo showing decoration example'
              className='block object-cover rounded-md'
              width={500}
              height={500}
            />
          </figure>
        </div>
        <div className='step flex flex-col lg:grid lg:grid-cols-2 place-items-center items-center gap-12 lg:gap-24 mb-16 lg:mb-24'>
          <figure className='relative'>
            <Image
              src={animacijeDisplay}
              alt='Photo showing decoration example'
              className='block object-cover rounded-md'
              width={500}
              height={500}
            />
          </figure>
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

            <p className='lg:leading-9  text-base lg:text-lg  text-gray-700'>
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

        <div className='kids__celeb-categories  mb-16 lg:mb-24'>
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
          <div className='photo__gallery mb-16 lg:mb-24'>
            <h5
              className={clsx(
                josefinSans.className,
                'text-lg lg:text-2xl text-color-accent-main font-semibold lg:mb-3 text-center'
              )}
            >
              Animacije
            </h5>
            <Gallery srcArray={srcArrayAnimations} />
          </div>
        </div>
        <div className='photo__gallery'>
          <h5
            className={clsx(
              josefinSans.className,
              'text-2xl text-color-accent-main font-semibold mb-5 lg:mb-3 text-center '
            )}
          >
            Rođendani
          </h5>
          <Gallery srcArray={srcArrayBirthdays} />
        </div>
      </div>
    </section>
  );
};

export default layout;

/* 

    <section id='howItWorks' className='py-24 bg-white'>
      <div className='mx-auto max-w-custom px-5 lg:px-0'>
        <div className='mb-16 lg:mb-24'>
          <h3
            className={clsx(
              josefinSans.className,
              'text-base font-bold tracking-wide uppercase text-color-accent-main mb-3'
            )}
          >
            Kako radimo
          </h3>
          <h4 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700'>
            Organizujte svoj projekat iz snova u 3 laka koraka
          </h4>
        </div>
      
      </div>
    </section>


*/
