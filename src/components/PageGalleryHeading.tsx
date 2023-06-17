'use client';
import clsx from 'clsx';
import { FC } from 'react';
import { josefinSans } from '../../utils/fonts';
import { useAppContext } from '@/Provider/appContext';

const PageGalleryHeading: FC = () => {
  const { isEnglish } = useAppContext();
  return (
    <h5
      className={clsx(
        josefinSans.className,
        'text-2xl lg:text-3xl text-color-accent-main font-semibold mb-4 lg:mb-5 text-center'
      )}
    >
      {isEnglish ? 'Foto gallery' : 'Foto galerija'}
    </h5>
  );
};

export default PageGalleryHeading;
