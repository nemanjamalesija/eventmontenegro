import { FC } from 'react';
import { icons } from '../../../assets/svg/Icons';
import clsx from 'clsx';
import { josefinSans, nunito } from '../../../utils/fonts';

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
          <h3 className='text-5xl font-bold text-gray-700'>
            Organizujte svoj projekat iz snova u 3 laka koraka
          </h3>
        </div>
        <div className='step flex flex-col lg:grid lg:grid-cols-custom lg:items-center gap-20 lg:gap-24 mb-20'>
          <div className='step__text'>
            <p className='text-7xl text-gray-300 font-bold mb-3'>01</p>
            <h4 className='text-gray-700 text-3xl font-bold mb-6'>
              Recite nam šta volite (a šta ne){' '}
            </h4>
            <p className='text-lg text-gray-700'>
              Recite nam o vašem projektu iz snova. Bilo da se radi o dječijem
              događaju, vjenčanju, rođendanskoj proslavi ili balonijadi,
              podijelite svoje želje i posebne zahtjeve sa nama. Daćemo sve od
              sebe kako bismo razumjeli vašu viziju i kreirali jedinstveno
              iskustvo.
            </p>
          </div>

          <div className='step__icon'>{icons.choose}</div>
        </div>
        <div className='step flex flex-col lg:grid lg:grid-cols-custom lg:items-center justify-between lg:gap-24 mb-20'>
          <div className='step__icon object-contain'>{icons.letUsKnow}</div>
          <div className='step__text'>
            <p className='text-7xl text-gray-300 font-bold mb-3'>02</p>
            <h4 className='text-gray-700 text-3xl font-bold mb-6'>
              Izaberite i personalizujte ponudu
            </h4>
            <p className='text-lg text-gray-700'>
              Izaberite iz našeg obimnog izbora vrhunske opreme i dekoracije za
              događaje i pronađite savršene elemente za oživljavanje vašeg
              događaja. Takođe, ako vam je potrebna pomoć u organizaciji
              događaja, naš stručni tim može se pozabaviti logistikom,
              koordinacijom i ostalim sitnicama.
            </p>
          </div>
        </div>
        <div className='step flex flex-col lg:grid lg:grid-cols-custom lg:items-center justify-between lg:gap-24'>
          <div className='step__text'>
            <p className='text-7xl text-gray-300 font-bold mb-3'>03</p>
            <h4 className='text-gray-700 text-3xl font-bold mb-6'>
              Opustite se i uživajte u vašem slavlju
            </h4>
            <p className='text-lg text-gray-700'>
              Prepustite se i uživajte u bezbrižnom i nezaboravnom slavlju, dok
              mi brinemo o svim detaljima. Naš tim će vam pružiti podršku i
              obezbijediti vrhunsku opremu za vaš događaj. Bez obzira da li se
              odlučite za rentiranje opreme ili nam povjerite i organizaciju, mi
              smo tu da vam pružimo sve što vam je potrebno za nezaboravno
              iskustvo.
            </p>
          </div>

          <div className=''>{icons.relax}</div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
