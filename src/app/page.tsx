import ContactForm from './Home/ContactForm';
import Hero from './Home/Hero';
import HowItWorks from './Home/HowItWorks';
import Offers from './Home/Offers';
import RentEquipment from './Home/RentEquipment';
import Reviews from './Home/Reviews';

import { FC } from 'react';

const page: FC = () => {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Offers />
      <RentEquipment />
      <Reviews />
      <ContactForm />
    </main>
  );
};

export default page;
