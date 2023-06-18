'use client';

import { useAppContext } from '@/Provider/appContext';
import { FC } from 'react';
import WeddingsSerbian from './WeddingsSerbian';
import WeddingsEnglish from './WeddingsEnglish';

const WeddingsContent: FC = () => {
  const { isEnglish } = useAppContext();
  return isEnglish ? <WeddingsEnglish /> : <WeddingsSerbian />;
};

export default WeddingsContent;
