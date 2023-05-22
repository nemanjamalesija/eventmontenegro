import { poppins } from '../../utils/fonts';
import Navigation from './Home/Navigation/Navigation';
import './globals.css';

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
      <body className={poppins.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
