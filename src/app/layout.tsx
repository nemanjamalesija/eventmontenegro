import clsx from 'clsx';
import { nunito } from '../../utils/fonts';
import Navigation from './Layout/Navigation/Navigation';
import Sidebar from './Layout/Sidebar/Sidebar';
import './globals.css';
import { AppProvider } from '@/Provider/appContext';

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
    <html lang='en'>
      <body className={clsx(nunito.className)}>
        <AppProvider>
          <Navigation />
          <Sidebar />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
