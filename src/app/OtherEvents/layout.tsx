import { Flower, PartyPopper } from 'lucide-react';
import { ReactNode } from 'react';
import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';
import OfferToDispay from './OfferToDispay';

type LayoutProps = {
  children: ReactNode;
};

const layout = async ({ children }: LayoutProps) => {
  return (
    <section className='py-24 lg:px-10 bg-color-lightest border-t-2 border-b-2 border-white'>
      <div className='mx-auto max-w-custom px-4 lg:px-0 mt-6'>
        <h2
          className={clsx(
            josefinSans.className,
            'text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mb-4 lg:mb-6'
          )}
        >
          Ostale proslave
        </h2>

        <div
          className='other-celebrations__img-box h-[40vh] w-full bg-blend-screen
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
                Imate ideju? Mi imamo rešenje
              </h3>
            </div>
            <p className='text-base lg:text-lg text-gray-700'>
              Punoljetstvo, godišnjice, djevojačke večeri i iznenađenja za drage
              osobe su događaji kojima posvećujemo posebnu pažnju, pa su nam
              zato i izuzetno dragi. Naš tim može napraviti scenario događaja za
              Vašu proslavu ili realizovati Vašu ideju. Specialnizovani smo za
              kreiranje inovativnih dekoracija koje ostavljaju snažan utisak i
              čine proslavu nezaboravnom. Možemo predložiti najbolji izbor hrane
              i pića, angažovati muziku, fotografa i obezbijediti specijalne
              efekte. Otvoreni smo za sva pitanja. Uz našu kompletnu ponudu i
              profesionalnu uslugu, preostaje Vam samo da se lijepo provedete.
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
                Zabavni program
              </h3>
            </div>
            <p className='text-base lg:text-lg  text-gray-700'>
              Ukoliko želite da Vaša proslava ostane u sjećanju kao jedan
              izuzetan događaj, predlažemo da odaberete neki od naših zabavnih
              programa u kojima ćete uživati i Vi i Vaši gosti.
            </p>
          </div>
        </div>
        <OfferToDispay />
      </div>
    </section>
  );
};

export default layout;
