'use client';

import clsx from 'clsx';
import { nunito } from '../../utils/fonts';
import Navigation from './Home/Navigation';
import './globals.css';
import { AppProvider, useAppContext } from '@/Provider/appContext';
import Footer from './Home/Footer';

export const metadata = {
  title: 'Event Montenegro | Luxury Weddings & Event Services',
  description:
    'Event Montenegro offers luxury weddings, event equipment rental, organization & coordination, balloons, and kids birthday decorations in Montenegro.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnglish } = useAppContext();

  return (
    <html lang='en' className='scroll-smooth'>
      <head></head>
      <body className={clsx(nunito.className, 'bg-color-lightest')}>
        <AppProvider>
          {!isEnglish ? (
            <Navigation
              link1='Home'
              link2='How it works'
              link3='Events'
              link4='Rent equipment'
              link5='Balloons'
              linkCTA='Get in touch'
            />
          ) : (
            <Navigation
              link1='Početna'
              link2='Kako radimo'
              link3='Proslave'
              link4='Iznajmi opremu'
              link5='Baloni'
              linkCTA='Kontakt'
            />
          )}
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
