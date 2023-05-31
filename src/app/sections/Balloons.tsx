'use client';
import { FC, useState } from 'react';
import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import { cn } from '../../../utils/twinMerge';

const baloonsContent = [
  {
    categoryContent:
      'Dekoracija balonima je vrlo efektan način ukrašavanja prostora za posebne prilike. U ponudi imamo balone različitih vrsta, veličina i boja, kao i prateću opremu. U pogledu dekoracije, možemo odgovoriti na svaki Vaš zahtjev. Svojim dugodišnjim iskustvom i načinom rada postali smo prepoznatljivi po jedinstvenim balonskim kreacijama. ',
    offer: [
      'Lukove od balona',
      'Stubove od balona',
      'Balon eksploziju',
      'Zid od balona',
      'Pravljenje raznih figura i oblika od balona',
      'Bukete od balona',
      'Uslužno punjenje balona',
      'Pakovanje poklona u balon',
      'Balone u kutiji kao iznenađenje',
    ],
  },

  {
    categoryContent:
      'Balone šaljemo brzom poštom širom Crne Gore. Izbor balona je velik i mogu biti mali znak pažnje za rodjendan, rodjenje, diplomiranje ili za neku drugu priliku. ',
    offer: [
      'Buket od balona',
      'Figuru od balona',
      'Poklon u balonu',
      'Balon u kutiji',
    ],
    comment:
      'Ukoliko je potrebna veća količina balona, isporuku i punjenje balona vršimo na licu mjesta.',
  },
  {
    categoryContent:
      'Ispuštanje balona iz mreže je veoma atraktivno i stvara poseban utisak na prisutne. Baloni napunjeni helijum se u određenom momentu puštaju iz mreže kako bi odletjeli u vazduh. Drugi način ispuštanja balona je da se u visokim halama i objektima koji imaju odgovarajuću visinu podesi da sa plafona pada 1000, 1500 ili više balona.  ',
  },
  {
    categoryContent:
      'Baloni sa štampom su odličan način za promociju Vaše firme, brenda ili proizvoda. Štampu radimo u jednoj ili u više boja. Zavisno od količine balona, štampu na balonima treba poručiti tri do pet dana ranije. Osim štampe, u ponudi imamo i mogućnost ispisivanja raznih poruka ili imena na balonima, kao i loga Vaše firme.',
  },
];

const baloonCategories = ['Dekoraija', 'Isporuka', 'Ispuštanje', 'Štampa'];

const Balloons: FC = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <section className='py-24 lg:px-10 bg-color-lightest border-t-2 border-b-2 border-white'>
      <div className='mx-auto px-5 lg:px-0'>
        <div className='mb-8 lg:mb-12'>
          <h2
            className={clsx(
              josefinSans.className,
              'text-base font-bold tracking-wide uppercase text-color-accent-main mb-3'
            )}
          >
            Baloni
          </h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700'>
            Dekoracija, isporuka, ispuštanje i štampa balona
          </h3>
        </div>
        <div
          className='balloons__img-box h-[40vh] w-full bg-blend-screen bg-cover'
          bg-blend-screen
          bg-cover
        ></div>
        <div className='balloons__content'>
          <div className='balloons__buttons flex items-center justify-between -translate-y-6 mb-4 lg:mb-8'>
            {baloonCategories.map((cat, i) => {
              return (
                <button
                  key={i}
                  className={cn(
                    'active:scale-95 transition-all, duration-300 rounded-full inline-flex items-center justify-center font-semibold transition-color focus:outline-none focus:ring-8 focus:ring-ring-color-primary focus:ring-offset-2 cursor-pointer px-3 py-1 sm:py-3 sm:px-6 text-base sm:text-xl bg-color-accent-main hover:bg-color-shade-main text-white',
                    { '-translate-y-2': i === categoryIndex }
                  )}
                  onClick={() => setCategoryIndex(i)}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <div className='balloons__text mx-auto '>
            <p className='text-base lg:text-lg text-gray-700 mb-6 lg:mb-10'>
              {baloonsContent[categoryIndex].categoryContent}
            </p>
            <ul className='balloons__offer list-none '>
              {baloonsContent[categoryIndex].offer && (
                <div className='balloons__offer-box flex flex-col gap-5'>
                  <h4 className='text-2xl lg:text-3xl font-bold text-gray-700'>
                    U ponudi imamo:
                  </h4>
                  {baloonsContent[categoryIndex]?.offer?.map((off, i) => (
                    <li
                      key={i}
                      className='list__item flex items-center gap-2  text-left text-gray-700 text-base lg:text-lg'
                    >
                      <Check className='stroke-color-accent-main' />
                      {off}
                    </li>
                  ))}
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Balloons;
