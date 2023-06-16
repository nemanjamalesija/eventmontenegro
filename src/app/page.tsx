'use client';

import { useAppContext } from '@/Provider/appContext';
import Balloons from './Home/Balloons';
import ContactForm from './Home/ContactForm';
import Hero from './Home/Hero';
import HowItWorks from './Home/HowItWorks';
import Offers from './Home/Offers';
import RentEquipment from './Home/RentEquipment';
import Reviews from './Home/Reviews';
import {
  howItWorksContentEnglish,
  howItWorksContentSerbian,
} from '@/constants/howITWorksContent';
import {
  heroContentEnglish,
  heroContentSerbian,
} from '@/constants/heroContent';
import {
  offersContentEnglish,
  offersContentSerbian,
} from '@/constants/offersContent';
import {
  rentEnglishContent,
  rentSerbianContent,
} from '@/constants/rentEquipmentContent';

export default function Home() {
  const { isEnglish } = useAppContext();
  return isEnglish ? (
    <main>
      <Hero content={heroContentEnglish} />
      <HowItWorks content={howItWorksContentEnglish} />
      <Offers content={offersContentEnglish} />
      <RentEquipment content={rentEnglishContent} />
      <Balloons />
      <Reviews />
      <ContactForm />
    </main>
  ) : (
    <main>
      <Hero content={heroContentSerbian} />
      <HowItWorks content={howItWorksContentSerbian} />
      <Offers content={offersContentSerbian} />
      <RentEquipment content={rentSerbianContent} />
      <Balloons />
      <Reviews />
      <ContactForm />
    </main>
  );
}
