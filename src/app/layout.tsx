import clsx from 'clsx';
import { nunito } from '../../utils/fonts';
import Navigation from './sections/Navigation';
import './globals.css';
import { AppProvider } from '@/Provider/appContext';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';

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
      <body className={clsx(nunito.className, 'bg-bg-general relative')}>
        <AppProvider>
          <Navigation />
          <Hero />
          <HowItWorks />
        </AppProvider>
      </body>
    </html>
  );
}
