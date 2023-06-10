'use client';
import { useEffect, useState } from 'react';

import { FC } from 'react';
import { kidsOffers } from './kidsOffers';
import clsx from 'clsx';
import { josefinSans } from '../../../utils/fonts';

const OfferToDisplay: FC = () => {
  const [currentCategory, setCurrentCategory] = useState('Maskote');
  const [currentOffer, setCurrentOffer] = useState(kidsOffers[0]);

  useEffect(() => {
    const offerToDisplay = kidsOffers.filter(
      (o) => o.category === currentCategory
    );

    const { category, content } = offerToDisplay[0];

    setCurrentOffer({ category, content });
  }, [currentCategory]);

  return (
    <div className='flex flex-col lg:grid lg:grid-cols-2 items-center gap-12 lg:gap-24 mb-12 lg:mb-24'>
      <div
        className={clsx(
          'p-1 text-color-gray-light-1 rounded-md justify-between py-2 px-4'
        )}
      >
        <p className={clsx('text-base lg:text-lg lg:leading-9 text-gray-600')}>
          {currentOffer.content}
        </p>
      </div>
      <div>
        <h5
          className={clsx(
            josefinSans.className,
            'text-xl text-color-accent-main font-semibold mb-3'
          )}
        >
          Saznajte više:
        </h5>

        <div
          className={clsx(
            'modal grid grid-cols-2 gap-y-[10px] py-2 px-4  rounded-md justify-between'
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
              onClick={() => setCurrentCategory(c.category)}
            >
              {c.category === currentCategory
                ? `${c.category} \u2190`
                : c.category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferToDisplay;
