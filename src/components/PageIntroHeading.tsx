'use client';
import clsx from 'clsx';
import { FC } from 'react';
import { josefinSans } from '../../utils/fonts';
import { useAppContext } from '@/Provider/appContext';

type PageHeadingProps = {
  heading: string;
};

const PageIntroHeading: FC<PageHeadingProps> = ({ heading }) => {
  return (
    <h2
      className={clsx(
        josefinSans.className,
        'text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mb-4 lg:mb-6'
      )}
    >
      {heading}
    </h2>
  );
};

export default PageIntroHeading;
