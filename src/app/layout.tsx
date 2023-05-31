import clsx from 'clsx';
import { nunito } from '../../utils/fonts';
import Navigation from './sections/Navigation';
import './globals.css';
import { AppProvider } from '@/Provider/appContext';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Reviews from './sections/Reviews';
import Offers from './sections/Offers';
import Balloons from './sections/Balloons';

export const metadata = {
  title: 'Event Montenegro',
  description:
    'Organizacija dogadjaja i Iznajmjivanje opreme za proslave. Organisation of events and celebration equipment rental company',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={clsx(nunito.className, 'bg-color-gray-light-1 ')}>
        <AppProvider>
          <Navigation />
          <Hero />
          <HowItWorks />
          <Offers />
          <Balloons />
          <Reviews />
        </AppProvider>
      </body>
    </html>
  );
}
