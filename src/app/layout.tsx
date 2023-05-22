import Navigation from './Home/Navigation/Navigation';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
      <body className='font-custom-font'>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
