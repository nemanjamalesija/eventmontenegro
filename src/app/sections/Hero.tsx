import { FC } from 'react';
import clsx from 'clsx';
import { josefinSans, nunito } from '../../../utils/fonts';
import CustomLink from '@/components/ui/CustomLink';
import Image from 'next/image';
import hero from '../../../assets/img/hero.png';

const Hero: FC = () => {
  return (
    <section className='pt-4 sm:pt-12 px-5 mb-28'>
      <div className='flex flex-col lg:grid lg:grid-cols-custom lg:items-start gap-20 lg:gap-24 mx-auto max-w-7xl'>
        <div className='mt-4 sm:mt-20'>
          <h1
            className={clsx(
              josefinSans.className,
              'heading-primary text-center lg:text-start text-4xl md:text-5xl font-bold text-gray-700'
            )}
          >
            Stvaramo nezaboravna sjećanja koja traju vječno
          </h1>
          <p
            className={clsx(
              nunito.className,
              'text-lg md:text-16rem leading-7 lg:leading-9 text-center lg:text-start  text-gray-700 font-normal  mt-4 sm:mt-6'
            )}
          >
            Iznajmljivanje opreme, organizacija i koordinacija proslava.
            Prilagođeno Vašim ličnim potrebama i detaljnim željama.
          </p>
          <div className='mt-10 flex justify-center lg:justify-start gap-6'>
            <CustomLink className='px-4 py-2 sm:py-3 sm:px-6 sm:text-xl'>
              Počnite svoj projekat
            </CustomLink>
            <CustomLink
              className='ghost flex items-center justify-center px-4 py-2 sm:py-3 sm:px-10  text-lg  sm:text-xl'
              variant='ghost'
              href='#howItWorks'
            >
              Saznajte više &darr;
            </CustomLink>
          </div>
        </div>
        <div className='relative '>
          <picture className='hero__image'>
            <Image
              src={hero}
              alt='Hero image'
              className='w-full h-full object-cover'
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
