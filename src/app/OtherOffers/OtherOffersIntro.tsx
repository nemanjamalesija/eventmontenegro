'use client';
import { useAppContext } from '@/Provider/appContext';
import PageIntroHeading from '@/components/PageIntroHeading';
import { FC } from 'react';

const OtherOffersIntro: FC = () => {
  const { isEnglish } = useAppContext();

  return (
    <div className='mb-16 lg:mb-24'>
      <PageIntroHeading
        heading={
          isEnglish ? 'Other offers we provide' : 'Ostale usluge koje pružamo'
        }
      />

      <div
        className='other-offers__img-box h-[40vh] w-full bg-blend-screen
          bg-cover bg-center lg:bg-top'
      ></div>
    </div>
  );
};

export default OtherOffersIntro;
