import clsx from 'clsx';
import { nunito } from '../../utils/fonts';
import Navigation from './Home/Navigation';
import './globals.css';
import { AppProvider } from '@/Provider/appContext';
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
