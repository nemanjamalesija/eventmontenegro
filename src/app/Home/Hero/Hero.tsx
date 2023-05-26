import { FC } from 'react';
import clsx from 'clsx';
import { josefinSans } from '../../../../utils/fonts';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import hero from '../../../../assets/img/hero.png';

const Hero: FC = () => {
  return (
    <section className='pt-4 sm:pt-12 px-2'>
      <div className='flex flex-col sm:grid sm:grid-cols-custom sm:items-start gap-24 mx-auto max-w-custom'>
        <div className='mt-4 sm:mt-16'>
          <h1
            className={clsx(
              josefinSans.className,
              'heading-primary text-center sm:text-start text-4xl sm:text-6xl font-bold text-gray-600'
            )}
          >
            Stvaramo nezaboravna sjećanja koja traju vječno
          </h1>
          <p className='text-lg sm:text-16rem leading-7 sm:leading-9 text-center sm:text-start  text-gray-700 font-normal  mt-4 sm:mt-6'>
            Iznajmljivanje opreme, organizacija i koordinacija proslava.
            Prilagođeno vašim ličnim potrebama i detaljnim željama.
          </p>
          <div className='mt-10 flex justify-center sm:justify-start gap-6'>
            <Button className='px-4 py-2 sm:py-3 sm:px-10 sm:text-2xl'>
              Počni svoj projekat
            </Button>
            <Button
              className='ghost flex items-center justify-center px-4 py-2 sm:py-3 sm:px-10  text-lg  sm:text-xl'
              variant='ghost'
            >
              Saznaj više &darr;
            </Button>
          </div>
        </div>
        <div className='relative '>
          <picture className='hero__image'>
            <Image
              src={hero}
              alt='Hero image'
              className='max-w-7xl w-130 h-130 object-cover'
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
