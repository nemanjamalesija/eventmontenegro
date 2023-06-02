'use client';

import { FC } from 'react';
import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import ImageGallery from 'react-image-gallery';
import { rentImages } from '../../../assets/img/rent/rentImages';
import '../gallery.css';

const rentOffer1 = [
  'Tiffany stolice',
  'Konferencijske stolice',
  'Navlake za stolice',
  'Mašne za stolice',
];

const rentOffer2 = [
  'Barski stolovi',
  'Banket okrugli stolovi',
  'Pravougaoni stolovi',
  'Stolnjaci',
];

const rentOffer3 = [
  'Svjećnjaci',
  'Stubići sa kanapom',
  'Bijeli golubovi',
  'Uniforme za hostese',
];

const rentOffer4 = ['Tron fotelje za mladence', 'Vaze za cvijeće'];

const RentEquipment: FC = () => {
  return (
    <section className='py-24 lg:px-10 bg-color-lightest border-t-2 border-b-2 border-white'>
      <div className='mx-auto max-w-custom px-4 lg:px-0'>
        <div className='mb-8 lg:mb-12'>
          <h2
            className={clsx(
              josefinSans.className,
              'text-base font-bold tracking-wide uppercase text-color-accent-main mb-3'
            )}
          >
            Iznajmjivanje opreme
          </h2>
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700'>
            Sve što je potrebno za Vaš projekat
          </h3>
        </div>
        <div
          className='rent__equipment h-[40vh] w-full mb-4 lg:mb-8 bg-blend-screen
          bg-cover'
        ></div>
        <p className='text-base lg:text-lg text-gray-700 mb-6 lg:mb-10'>
          Ukoliko se odlučite da sami organizujete vjenčanje, poslovni događaj,
          rođendan ili bilo koju drugu proslavu, sigurni smo da ćete iz našeg
          bogatog asortimana mobilijara, opreme i dekorativnih elemenata moći
          izabrati upravo ono što Vam je potrebno.
        </p>
        <h4 className='text-2xl  font-bold text-gray-700 mb-3'>
          Sve za proslave
        </h4>
        <ul className='list-none flex flex-col gap-2 lg:flex-row lg:justify-between mb-8 lg:mb-10'>
          <div className='flex flex-col gap-2'>
            {rentOffer1.map((off, i) => (
              <li
                key={i}
                className='list__item flex items-center gap-2 text-center text-gray-700 text-base lg:text-lg'
              >
                <Check className='stroke-color-accent-main' />
                {off}
              </li>
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            {rentOffer2.map((off, i) => (
              <li
                key={i}
                className='list__item flex items-center gap-2 text-center text-gray-700 text-base lg:text-lg'
              >
                <Check className='stroke-color-accent-main' />
                {off}
              </li>
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            {rentOffer3.map((off, i) => (
              <li
                key={i}
                className='list__item flex items-center gap-2 text-center text-gray-700 text-base lg:text-lg'
              >
                <Check className='stroke-color-accent-main' />
                {off}
              </li>
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            {rentOffer4.map((off, i) => (
              <li
                key={i}
                className='list__item flex items-center gap-2 text-center text-gray-700 text-base lg:text-lg'
              >
                <Check className='stroke-color-accent-main' />
                {off}
              </li>
            ))}
          </div>
        </ul>
        <div className='photo__gallery'>
          <h2
            className={clsx(
              josefinSans.className,
              'text-base font-bold tracking-wide uppercase text-color-accent-main mb-3 lg:mb-6 text-center'
            )}
          >
            Foto Galerija
          </h2>
          <ImageGallery
            items={rentImages}
            showPlayButton={false}
            showFullscreenButton={false}
            slideOnThumbnailOver={true}
            showIndex={true}
          />
        </div>
      </div>
    </section>
  );
};

export default RentEquipment;
