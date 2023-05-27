import { FC } from 'react';
import { icons } from '../../../assets/svg/Icons';
import clsx from 'clsx';
import { josefinSans, nunito } from '../../../utils/fonts';
import LetUsKnow from '@/components/ui/LetUsKnow';

const HowItWorks: FC = () => {
  return (
    <section id='howItWorks' className='mt-24 lg:pt-20 px-5'>
      <div className='mx-auto max-w-custom'>
        <div className='mb-24'>
          <h2
            className={clsx(
              josefinSans.className,
              'text-base font-bold tracking-wide uppercase text-color-accent-main mb-3'
            )}
          >
            Kako radimo
          </h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700'>
            Organizujte svoj projekat iz snova u 3 laka koraka
          </h3>
        </div>
        <div className='step flex flex-col lg:grid lg:grid-cols-custom items-center gap-20 lg:gap-24 mb-20'>
          <div className='step__text'>
            <p className='text-5xl md:text-6xl lg:text-7xl text-gray-300 font-bold mb-3'>
              01
            </p>
            <h4 className='text-gray-700 text-2xl lg:text-3xl font-bold mb-6'>
              Recite nam šta volite (a šta ne){' '}
            </h4>
            <p className='text-base md:text-lg text-gray-700'>
              Recite nam o Vašem projektu iz snova. Bilo da se radi o dječijem
              događaju, vjenčanju, rođendanskoj proslavi ili balonijadi,
              podijelite svoje želje i posebne zahtjeve sa nama. Daćemo sve od
              sebe kako bismo razumjeli Vašu viziju i kreirali jedinstveno
              iskustvo.
            </p>
          </div>

          <div className='step__icon'>{icons.choose}</div>
        </div>
        <LetUsKnow />
        <div className='step flex flex-col lg:grid lg:grid-cols-custom items-center justify-between gap-20 lg:gap-24 mb-20'>
          <div className='step__text'>
            <p className='text-5xl md:text-6xl lg:text-7xl text-gray-300 font-bold mb-3'>
              03
            </p>
            <h4 className='text-gray-700 text-2xl lg:text-3xl font-bold mb-6'>
              Opustite se i uživajte u Vašem slavlju
            </h4>
            <p className='text-base md:text-lg text-gray-700'>
              Prepustite se i uživajte u bezbrižnom i nezaboravnom slavlju, dok
              mi brinemo o svim detaljima. Naš tim će Vam pružiti podršku i
              obezbijediti vrhunsku opremu za Vaš događaj. Bez obzira da li se
              odlučite za rentiranje opreme ili nam povjerite i organizaciju, mi
              smo tu da pružimo sve što Vam je potrebno za nezaboravno iskustvo.
            </p>
          </div>

          <div className=''>{icons.relax}</div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
