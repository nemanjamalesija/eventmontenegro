import clsx from 'clsx';
import { nunito } from '../../utils/fonts';
import Navigation from './Home/Navigation';
import './globals.css';
import { AppProvider } from '@/Provider/appContext';
import Hero from './Home/Hero';
import HowItWorks from './Home/HowItWorks';
import Reviews from './Home/Reviews';
import Offers from './Home/Offers';
import Balloons from './Home/Balloons';

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
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
