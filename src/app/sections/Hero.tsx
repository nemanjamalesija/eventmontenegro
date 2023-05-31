'use client';
import { useEffect } from 'react';
import { FC } from 'react';
import clsx from 'clsx';
import { josefinSans, nunito } from '../../../utils/fonts';
import CustomLink from '@/components/ui/CustomLink';
import Image from 'next/image';
import hero from '../../../assets/img/hero.png';
import { useAppContext } from '@/Provider/appContext';

const Hero: FC = () => {
  const { heroRef, navRef } = useAppContext();

  useEffect(() => {
    if (!heroRef.current) return;

    const stickyNav = function (entries: IntersectionObserverEntry[]) {
      if (!navRef.current) return;

      const [entry] = entries;

      if (!entry.isIntersecting) navRef.current.classList.add('sticky');
      else navRef.current.classList.remove('sticky');
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: '14px',
    });

    headerObserver.observe(heroRef.current);

    // Cleanup function
    return () => {
      headerObserver.disconnect();
    };
  }, [heroRef, navRef]);

  return (
    <section className='pt-24 sm:pt-32 px-5 mb-24' ref={heroRef}>
      <div className='flex flex-col lg:grid lg:grid-cols-custom2fr lg:items-start gap-20 lg:gap-24 mx-auto max-w-7xl'>
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
              'text-lg md:text-hero-p leading-7 lg:leading-9 text-center lg:text-start  text-gray-700 font-normal  mt-4 sm:mt-6'
            )}
          >
            Iznajmljivanje opreme, organizacija i koordinacija proslava.
            Prilagođeno Vašim ličnim potrebama i detaljnim željama.
          </p>
          <div className='mt-10 flex justify-center lg:justify-start gap-2 lg:gap-6'>
            <CustomLink
              href='#'
              className='px-4 py-2 sm:py-3 sm:px-6 sm:text-xl'
            >
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
              priority={true}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
