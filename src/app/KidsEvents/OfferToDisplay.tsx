import { useEffect, useState } from 'react';

import { FC } from 'react';
import { kidsOffers } from './kidsOffers';
import clsx from 'clsx';

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
    <div className='flex flex-col lg:grid grid-cols-2 gap-x-24 gap-12 mb-8'>
      <div
        className={clsx(
          'modal grid grid-cols-2 gap-y-4 p-1 text-color-gray-light-1 rounded-md justify-between bg-white'
        )}
      >
        {kidsOffers.map((c, i) => (
          <span
            key={i}
            className='text-center text-base lg:text-lg  text-gray-600 font-semibold cursor-pointer'
            onClick={() => setCurrentCategory(c.category)}
          >
            {c.category}
          </span>
        ))}
      </div>
      <div
        className={clsx(
          'modal p-1 text-color-gray-light-1 rounded-md justify-between'
        )}
      >
        <p className='text-base lg:text-lg  text-gray-600 font-semibold'>
          {currentOffer.content}
        </p>
      </div>
    </div>
  );
};

export default OfferToDisplay;
