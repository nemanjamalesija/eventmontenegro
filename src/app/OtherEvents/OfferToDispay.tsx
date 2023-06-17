'use client';

import { FC, useEffect, useState } from 'react';
import {
  otherOffersContentSerbian,
  otherOffersContentEnglish,
} from './otherOffers';
import clsx from 'clsx';
import { useAppContext } from '@/Provider/appContext';

const OfferToDispay: FC = () => {
  const { isEnglish } = useAppContext();
  const [currentCategory, setCurrentCategory] = useState('Dances');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const otherOffers = isEnglish
    ? otherOffersContentEnglish
    : otherOffersContentSerbian;

  const toggleContentModal = (currCat: string, currIndex: number) => {
    setCurrentCategory(currCat);
    setActiveCategoryIndex(currIndex);
  };

  useEffect(() => {
    setCurrentCategory(otherOffers[activeCategoryIndex].category);
  }, [activeCategoryIndex, otherOffers]);

  return (
    <div className='flex flex-col lg:grid grid-cols-2 gap-x-24 gap-5 mb-12 lg:mb-16'>
      <div
        className={clsx(
          'modal grid grid-cols-2 gap-y-[10px] py-2 px-4  rounded-md justify-between'
        )}
      >
        {otherOffers.map((c, i) => (
          <span
            key={i}
            className={clsx(
              'text-center text-base lg:text-lg font-semibold cursor-pointer transition-all duration-300 ',
              {
                'text-color-lightest': c.category === currentCategory,
                'text-color-accent-darkest': c.category !== currentCategory,
              }
            )}
            onClick={() => toggleContentModal(c.category, i)}
          >
            {c.category === currentCategory
              ? `${c.category} \u2190`
              : c.category}
          </span>
        ))}
      </div>
      <div
        className={clsx(
          'p-1 text-color-gray-light-1 rounded-md justify-between py-2 px-4'
        )}
      >
        <p className={clsx('text-base lg:text-lg  text-gray-600')}>
          {otherOffers[activeCategoryIndex].content}
        </p>
      </div>
    </div>
  );
};

export default OfferToDispay;
