'use client';

import { useAppContext } from '@/Provider/appContext';
import Balloons from './Home/Balloons';
import ContactForm from './Home/ContactForm';
import Hero from './Home/Hero';
import HowItWorks from './Home/HowItWorks';
import Offers from './Home/Offers';
import RentEquipment from './Home/RentEquipment';
import Reviews from './Home/Reviews';
import { contentEnglishHowItWorks, contentSerbianHowItWorks } from '@/constants/howITWorksContent';

export default function Home() {
  const { isEnglish } = useAppContext();
  return isEnglish ? (
    <main>
      <Hero
        heroHeading='Create unforgettable memories that last forever'
        heroDescription='Equipment rental, event organization, and coordination.
                        Customized to your personal needs and specific desires.'
        heroCta1='Plan the event'
        heroCta2='Learn more'
      />
      <HowItWorks content={contentEnglishHowItWorks} />
      <Offers />
      <RentEquipment />
      <Balloons />
      <Reviews />
      <ContactForm />
    </main>
  ) : (
    <main>
      <Hero
        heroHeading='Stvaramo nezaboravna sjećanja koja traju vječno'
        heroDescription='Iznajmljivanje opreme, organizacija i koordinacija proslava.
            Prilagođeno Vašim ličnim potrebama i detaljnim željama'
        heroCta1='Isplaniraj svoj događaj'
        heroCta2='Saznaj više'
      />
      <HowItWorks content={contentSerbianHowItWorks} />
      <Offers />
      <RentEquipment />
      <Balloons />
      <Reviews />
      <ContactForm />
    </main>
  );
}
