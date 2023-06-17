'use client';
import { useAppContext } from '@/Provider/appContext';
import PageIntroHeading from '@/components/PageIntroHeading';
import {
  businessEventsContentEnglish,
  businessEventsContentSerbian,
} from '@/constants/businessEventsContent';
import { FC } from 'react';

const BusinessEventsIntro: FC = () => {
  const { isEnglish } = useAppContext();

  const content = isEnglish
    ? businessEventsContentEnglish
    : businessEventsContentSerbian;

  const { paragraph1, paragraph2 } = content;

  return (
    <div>
      <PageIntroHeading
        heading={isEnglish ? 'Business Events' : 'Poslovni događaji'}
      />
      <div
        className='business-celebrations__img-box h-[40vh] w-full bg-blend-screen
          bg-cover bg-center lg:bg-top mb-12 lg:mb-16'
      ></div>
      <div className='business-celebrations__text-box flex flex-col lg:grid grid-cols-2 gap-x-24 gap-8 mb-12 lg:mb-16'>
        <p className='text-base lg:text-lg text-gray-700'>{paragraph1}</p>
        <p className='text-base lg:text-lg text-gray-700'>{paragraph2}</p>
      </div>
    </div>
  );
};

export default BusinessEventsIntro;
