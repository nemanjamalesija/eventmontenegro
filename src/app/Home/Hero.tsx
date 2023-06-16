'use client';
import { useEffect } from 'react';
import { FC } from 'react';
import clsx from 'clsx';
import { josefinSans } from '../../../utils/fonts';
import CustomLink from '@/components/ui/CustomLink';
import { useAppContext } from '@/Provider/appContext';
import {
  heroContentEnglish,
  heroContentSerbian,
} from '@/constants/heroContent';

const Hero: FC = () => {
  const { heroRef, navRef, isEnglish } = useAppContext();
  const content = isEnglish ? heroContentEnglish : heroContentSerbian;

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
      className='hero__container pt-20 h-screen sm:pt-32 px-2 lg:px-0'
      ref={heroRef}
    >
      <div className='flex flex-col lg:grid lg:grid-cols-custom2fr lg:items-center gap-20 lg:gap-24 mx-auto max-w-7xl '>
        <div className='mt-16 sm:mt-20'>
          <h1
            className={clsx(
              josefinSans.className,
              'heading-primary text-center lg:text-start text-4xl md:text-6xl font-bold text-gray-700 '
            )}
          >
            {content.heroHeading}
          </h1>
          <p className='text-lg md:text-hero-p leading-7 lg:leading-9 text-center lg:text-start  text-gray-700 font-semibold lg:font-normal mt-4 sm:mt-6'>
            {content.heroDescription}
          </p>
          <div className='mt-10 flex justify-center lg:justify-start gap-4 lg:gap-6'>
            <CustomLink
              href='#'
              className='btn px-4 py-2 sm:py-3 sm:px-6 text-lg sm:text-xl'
            >
              {content.heroCta1}
            </CustomLink>
            <CustomLink
              className='btn ghost flex items-center justify-center px-4 py-2 sm:py-3 sm:px-10  text-lg  sm:text-xl'
              variant='ghost'
              href='#howItWorks'
            >
              {content.heroCta2} &darr;
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
