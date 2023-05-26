import { FC } from 'react';
import styles from './hero.module.css';
import clsx from 'clsx';
import {
  josefinSans,
  nunito,
  pinyonScript,
  poppins,
} from '../../../../utils/fonts';
import Button from '@/components/ui/Button';

const Hero: FC = () => {
  return (
    <section className={clsx(styles.section__hero, 'relative overflow-hidden')}>
      <div className={clsx(styles.hero__introduction, 'mt-20 w-full')}>
        <h1
          className={clsx(
            josefinSans.className,
            'heading-primary text-6xl sm:text-7xl text-gray-600'
          )}
        >
          Dio svake proslave
        </h1>
        <p className='text-2xl sm:text-3xl text-gray-700 font-medium mt-4'>
          Stvaramo nezaboravna sjećanja koja traju vječno.
        </p>
        <div className='mt-10 flex gap-6'>
          <Button>Počni svoj projekat</Button>
          <Button className='ghost' variant='ghost'>
            Saznaj više
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
