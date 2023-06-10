import { FC } from 'react';
import { icons } from '../../../assets/svg/Icons';
import clsx from 'clsx';
import { josefinSans } from '../../../utils/fonts';
import { Pointer, PartyPopper, HeartHandshake } from 'lucide-react';

const HowItWorks: FC = () => {
  return (
    <section id='balloons' className='py-24 border-t-2 border-b-2 border-white'>
      <div className='mx-auto max-w-custom px-5 lg:px-10 '>
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
        <div className='kids__text-box flex flex-col lg:grid grid-cols-3  gap-20 '>
          <div className='kids__text '>
            <div className='flex items-center gap-4 mb-6'>
              <div className='kids__icons-set flex items-center justify-center rounded-full h-12 w-12 lg:h-14 lg:w-14 bg-color-accent-main'>
                {<HeartHandshake className='stroke-color-gray-light-1' />}
              </div>
              <h3
                className={clsx(
                  josefinSans.className,
                  'text-xl text-color-accent-main'
                )}
              >
                Recite nam šta volite
              </h3>
            </div>
            <p className='text-base lg:text-lg text-gray-700 font-light'>
              Recite nam o Vašem projektu iz snova. Bilo da se radi o dječijem
              događaju, vjenčanju, rođendanskoj proslavi ili balonijadi,
              podijelite svoje želje i posebne zahtjeve sa nama. Tu smo da Vas
              saslušamo i daćemo sve od sebe kako bismo razumjeli Vašu viziju i
              kreirali jedinstveno iskustvo.
            </p>
          </div>

          <div className='step__1'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='kids__icons-set flex items-center justify-center rounded-full h-12 w-12 lg:h-14 lg:w-14 bg-color-accent-main'>
                {<Pointer className='stroke-color-gray-light-1' />}
              </div>
              <h3
                className={clsx(
                  josefinSans.className,
                  'text-xl text-color-accent-main font-normal'
                )}
              >
                Izaberite ponudu
              </h3>
            </div>
            <p className='text-base lg:text-lg  text-gray-700 font-light'>
              Izaberite iz našeg obimnog izbora vrhunske opreme i dekoracije za
              događaje i pronađite savršene elemente za oživljavanje Vašeg
              događaja. Takođe, ako Vam je potrebna pomoć u organizaciji
              događaja, naš stručni tim može se pozabaviti logistikom,
              koordinacijom i ostalim sitnicama.
            </p>
          </div>
          <div className='step__2'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='kids__icons-set flex items-center justify-center rounded-full h-12 w-12 lg:h-14 lg:w-14 bg-color-accent-main '>
                {<PartyPopper className='stroke-color-gray-light-1' />}
              </div>
              <h3
                className={clsx(
                  josefinSans.className,
                  'text-xl text-color-accent-main font-normal'
                )}
              >
                Opustite se i uživajte
              </h3>
            </div>
            <p className='text-base lg:text-lg  text-gray-700 font-light'>
              Prepustite se i uživajte u bezbrižnom slavlju, dok mi brinemo o
              svim detaljima. Bez obzira da li se odlučite za iznajmjivanje
              opreme ili ipak želite da nam povjerite i kompletnu organizaciju,
              mi smo tu da Vam pružimo sve što je potrebno za nezaboravno
              iskustvo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
