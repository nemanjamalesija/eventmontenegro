'use client';
import { useEffect, useState } from 'react';
import { FC } from 'react';
import clsx from 'clsx';
import { josefinSans } from '../../../utils/fonts';
import { useAppContext } from '@/Provider/appContext';
import {
  kidsOffersEnglish,
  kidsOffersSerbian,
} from '@/constants/kidsEventsContent';

const OfferToDisplay: FC = () => {
  const { isEnglish } = useAppContext();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('Mascots');
  const kidsOffers = isEnglish ? kidsOffersEnglish : kidsOffersSerbian;

  const toggleContentModal = (currCat: string, currIndex: number) => {
    setCurrentCategory(currCat);
    setActiveCategoryIndex(currIndex);
  };

  useEffect(() => {
    setCurrentCategory(kidsOffers[activeCategoryIndex].category);
  }, [activeCategoryIndex, kidsOffers]);

  return (
    <div className='flex flex-col lg:grid lg:grid-cols-2 items-center gap-12 lg:gap-24 mb-12 lg:mb-24'>
      <div>
        <h5
          className={clsx(
            josefinSans.className,
            'text-xl text-color-accent-main font-semibold mb-3'
          )}
        >
          {isEnglish ? 'Learn more:' : 'Saznajte više:'}
        </h5>

        <div
          className={clsx(
            'modal grid grid-cols-2 gap-y-[10px] py-2 px-4 rounded-md justify-between gap-x-5 lg:gap-x-0'
          )}
        >
          {kidsOffers.map((c, i) => (
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
      </div>
      <div
        className={clsx(
          'text-color-gray-light-1 rounded-md justify-between py-2'
        )}
      >
        <p className={clsx('text-base lg:text-lg lg:leading-9 text-gray-600')}>
          {kidsOffers[activeCategoryIndex].content}
        </p>
      </div>
      <div>
        <a
          href='#'
          className='text-base lg:text-lg text-color-accent-main hover:text-color-shade-main'
        >
          Saznajte jos vise na nasoj instagram stranici &rarr;
        </a>
      </div>
    </div>
  );
};

export default OfferToDisplay;
