'use client';
import { FC } from 'react';
import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import Gallery from '@/components/ui/Gallery';
import { srcArrayRentEquipment } from '../../../assets/img/rent/rentImages';
import { useAppContext } from '@/Provider/appContext';
import {
  rentEnglishContent,
  rentSerbianContent,
} from '@/constants/rentEquipmentContent';

const RentEquipment: FC = () => {
  const { isEnglish } = useAppContext();
  const content = isEnglish ? rentEnglishContent : rentSerbianContent;

  const {
    sectionHeading,
    sectionSubheading,
    sectionIntro,
    modalHeading,
    offers: { rentOffer1, rentOffer2, rentOffer3, rentOffer4 },
    galleryHeading,
  } = content;

  return (
    <section
      id='rentEquipment'
      className='py-16 lg:py-24  border-b-2 border-white lg:px-10'
    >
      <div className='mx-auto max-w-custom px-5'>
        <div className='mb-8 lg:mb-12'>
          <h3
            className={clsx(
              josefinSans.className,
              'text-base font-bold tracking-wide uppercase text-color-accent-main mb-3'
            )}
          >
            {sectionHeading}
          </h3>
          <h4 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700'>
            {sectionSubheading}
          </h4>
        </div>
        <div
          className='rent__equipment h-[40vh] w-full mb-4 lg:mb-8 bg-blend-screen
          bg-cover'
        ></div>
        <p className='text-base lg:text-lg text-gray-700 mb-16 lg:mb-24'>
          {sectionIntro}
        </p>

        <div className='flex flex-col items-center justify-center mb-16 lg:mb-24'>
          <h4
            className={clsx(
              josefinSans.className,
              'text-lg lg:text-2xl font-semibold text-color-accent-main mb-3'
            )}
          >
            {modalHeading}
          </h4>
          <div className='modal py-6 px-8 rounded-md w-fit lg:w-full'>
            <ul className='list-none flex flex-col gap-2 lg:flex-row lg:justify-between'>
              <div className='flex flex-col gap-2'>
                {rentOffer1.map((off, i) => (
                  <li
                    key={i}
                    className='list__item flex items-center gap-2 text-center text-accent-darkest text-base lg:text-lg'
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
                    className='list__item flex items-center gap-2 text-center text-color-accent-darkest text-base lg:text-lg'
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
                    className='list__item flex items-center gap-2 text-center text-color-accent-darkest text-base lg:text-lg'
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
                    className='list__item flex items-center gap-2 text-center text-color-accent-darkest text-base lg:text-lg'
                  >
                    <Check className='stroke-color-accent-main' />
                    {off}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className='p__gallery px-2 lg:px-8'>
        <h4
          className={clsx(
            josefinSans.className,
            'text-lg lg:text-2xl font-semibold text-color-accent-main mb-5 lg:mb-8  text-center'
          )}
        >
          {galleryHeading}
        </h4>
        <Gallery srcArray={srcArrayRentEquipment} />
      </div>
    </section>
  );
};

export default RentEquipment;
