import { FC } from 'react';
import clsx from 'clsx';
import { josefinSans } from '../../../../utils/fonts';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import hero from '../../../../assets/img/hero.png';

const Hero: FC = () => {
  return (
    <section className='pt-12 pb-24'>
      <div className='grid grid-cols-custom items-center  gap-24 px-9 mx-auto max-w-custom'>
        <div>
          <h1
            className={clsx(
              josefinSans.className,
              'heading-primary text-6xl sm:text-7xl text-gray-600'
            )}
          >
            Dio svake proslave
          </h1>
          <p className='text-2xl sm:text-3xl text-gray-700 font-medium mt-4'>
            Stvaramo nezaboravna sjećanja koja traju vječno.
          </p>
          <div className='mt-10 flex gap-6'>
            <Button>Počni svoj projekat</Button>
            <Button className='ghost' variant='ghost'>
              Saznaj više
            </Button>
          </div>
          <div className='mt-10 flex gap-6'>
            <Button>Počni svoj projekat</Button>
            <Button className='ghost' variant='ghost'>
              Saznaj više
            </Button>
          </div>
          <div className='mt-10 flex gap-6'>
            <Button>Počni svoj projekat</Button>
            <Button className='ghost' variant='ghost'>
              Saznaj više
            </Button>
          </div>
          <div className='mt-10 flex gap-6'>
            <Button>Počni svoj projekat</Button>
            <Button className='ghost' variant='ghost'>
              Saznaj više
            </Button>
          </div>
        </div>
        <div className='relative'>
          <picture className='hero__image'>
            <Image
              src={hero}
              alt='Hero image'
              className='max-w-7xl w-120 h-120 object-cover'
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
