import { Pinyon_Script, Poppins } from 'next/font/google';

export const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
