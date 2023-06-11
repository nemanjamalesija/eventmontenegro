import clsx from 'clsx';
import { nunito } from '../../utils/fonts';
import Navigation from './Home/Navigation';
import './globals.css';
import { AppProvider } from '@/Provider/appContext';
import Footer from './Home/Footer';

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
      <head></head>
      <body className={clsx(nunito.className, 'bg-color-lightest')}>
        <AppProvider>
          <Navigation />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
