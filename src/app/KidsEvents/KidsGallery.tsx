'use client';
import Gallery from '@/components/ui/Gallery';
import clsx from 'clsx';
import { FC } from 'react';
import { josefinSans } from '../../../utils/fonts';
import { srcArrayBirthdays } from '../../../assets/img/kidsEvents/birthdays/birthdaysImages';
import { srcArrayAnimations } from '../../../assets/img/kidsEvents/animations/animationsImages';
import { useAppContext } from '@/Provider/appContext';

const KidsGallery: FC = () => {
  const { isEnglish } = useAppContext();
  return (
    <div className='kids__galleries'>
      <div className='p__gallery'>
        <div className='photo__gallery mb-16 lg:mb-24'>
          <h5
            className={clsx(
              josefinSans.className,
              'text-2xl lg:text-3xl text-color-accent-main font-semibold mb-4 lg:mb-5 text-center'
            )}
          >
            {isEnglish ? 'Animations' : 'Animacije'}
          </h5>
          <Gallery srcArray={srcArrayAnimations} />
        </div>
      </div>
      <div className='p__gallery'>
        <h5
          className={clsx(
            josefinSans.className,
            'text-2xl lg:text-3xl text-color-accent-main font-semibold mb-4 lg:mb-5 text-center'
          )}
        >
          {isEnglish ? 'Birthdays' : 'Rođendani'}
          Rođendani
        </h5>

        <Gallery srcArray={srcArrayBirthdays} />
      </div>
    </div>
  );
};

export default KidsGallery;
