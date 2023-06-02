import Balloons from './Home/Balloons';
import Hero from './Home/Hero';
import HowItWorks from './Home/HowItWorks';
import Offers from './Home/Offers';
import RentEquipment from './Home/RentEquipment';
import Reviews from './Home/Reviews';

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Offers />
      <Balloons />
      <RentEquipment />
      <Reviews />
    </main>
  );
}
