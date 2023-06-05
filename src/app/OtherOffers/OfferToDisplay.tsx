'use client';

import { FC, useEffect, useState } from 'react';
import { otherOffers } from './otherOffers';
import clsx from 'clsx';

const OfferToDispay: FC = () => {
  const [currentCategory, setCurrentCategory] = useState('Štampa na platnu');
  const [currentOffer, setCurrentOffer] = useState(otherOffers[0]);

  useEffect(() => {
    const offerToDisplay = otherOffers.filter(
      (o) => o.category === currentCategory
    );

    const { category, content } = offerToDisplay[0];

    setCurrentOffer({ category, content });
  }, [currentCategory]);

  return (
    <div className='flex flex-col lg:grid grid-cols-2 gap-x-24 gap-5 mb-12 lg:mb-16'>
      <div
        className={clsx(
          'modal grid grid-cols-2 gap-y-[10px] py-2 px-4  lg:flex lg:flex-col rounded-md justify-between lg:h-48'
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
            onClick={() => setCurrentCategory(c.category)}
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
          {currentOffer.content}
        </p>
      </div>
    </div>
  );
};

export default OfferToDispay;
