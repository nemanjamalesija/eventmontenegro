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
      rootMargin: '-1px',
    });

    headerObserver.observe(heroRef.current);

    // Cleanup function
    return () => {
      headerObserver.disconnect();
    };
  }, [heroRef, navRef]);

  return (
    <section
      id='home'
      className='hero__container pt-20 h-screen sm:pt-32  px-2 lg:px-0'
      ref={heroRef}
    >
      <div className='flex flex-col lg:grid lg:grid-cols-custom2fr lg:items-center gap-20 lg:gap-24 mx-auto max-w-[1380px]'>
        <div className='mt-10 sm:mt-20'>
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
              'text-lg md:text-hero-p leading-7 lg:leading-9 text-center lg:text-start  text-gray-700 font-semibold lg:font-normal mt-4 sm:mt-6'
            )}
          >
            Iznajmljivanje opreme, organizacija i koordinacija proslava.
            Prilagođeno Vašim ličnim potrebama i detaljnim željama.
          </p>
          <div className='mt-10 flex justify-center lg:justify-start gap-4 lg:gap-6'>
            <CustomLink
              href='#'
              className='px-4 py-2 sm:py-3 sm:px-6 sm:text-xl'
            >
              Počnite projekat
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
      </div>
    </section>
  );
};

export default Hero;
