import Gallery from '@/components/ui/Gallery';
import { srcArrayHomeSystems } from '../../../assets/img/businessEvents/homeSystems/homeSystems';
import { srcArrayVolvo } from '../../../assets/img/businessEvents/volvo/volvo';
import { srcArrayWinter } from '../../../assets/img/businessEvents/winter/winter';
import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';

const srcArrayGallery = [
  ...srcArrayVolvo,
  ...srcArrayHomeSystems,
  ...srcArrayWinter,
];

const layout = async () => {
  return (
    <section className='py-24 lg:px-10 bg-color-lightest border-t-2 border-b-2 border-white'>
      <div className='mx-auto max-w-custom px-4 lg:px-0 mt-6 mb-16 lg:mb-24'>
        <h2
          className={clsx(
            josefinSans.className,
            'text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mb-4 lg:mb-6'
          )}
        >
          Poslovni događaji
        </h2>

        <div
          className='business-celebrations__img-box h-[40vh] w-full bg-blend-screen
          bg-cover bg-center lg:bg-top mb-12 lg:mb-16'
        ></div>
        <div className='business-celebrations__text-box flex flex-col lg:grid grid-cols-2 gap-x-24 gap-8 mb-12 lg:mb-16'>
          <p className='text-base lg:text-lg text-gray-700'>
            Event Montenegro ima dugogodišnje iskustvo u organizaciji poslovnih
            proslava, seminara i konferencija. Poslovni događaji su odličan
            način privlačenja novih klijenata i poslova, a važni su i za imidž
            firme. Za uspješno poslovanje svake firme važno je da podjeli radost
            obilježavanja značajnih datuma sa poslovnim partnerima, klijentima i
            zaposlenima. Sarađujući sa našim timom, proslavu poslovnog uspjeha
            ili dodjele nagrada, postavićete na viši nivo.
          </p>
          <p className='text-base lg:text-lg text-gray-700'>
            Možemo Vam pomoći u svim segmentima organizacije korporativne
            proslave, od ideje, osmišljavanja dizajna i izrade koncepta programa
            proslave, do pronalaženja adekvatnog prostora za Vaš događaj,
            obezbjeđivanja tehničke i audio opreme, mobilijara i osoblja. Na dan
            događaja vrišimo koordinaciju, dočekujemo goste i rukovodimo
            satnicom. Možemo udovoljiti svim Vašim zahtjevima, obezbijediti
            muzičko zabavni program, ketering, osmisliti biznis poklone,
            dekoraciju i specijalne efekte.
          </p>
        </div>
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
        <Gallery srcArray={srcArrayGallery} />
      </div>
    </section>
  );
};

export default layout;
