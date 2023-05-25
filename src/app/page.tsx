import Image from 'next/image';
import Hero from './Home/Hero/Hero';

export default function Home() {
  return (
    <main className='col-start-2 row-start-2 col-span-2'>
      <Hero />
    </main>
  );
}
