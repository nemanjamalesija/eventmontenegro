import { FC } from 'react';
import styles from './hero.module.css';
import clsx from 'clsx';
import { pinyonScript, poppins } from '../../../../utils/fonts';

const Hero: FC = () => {
  return (
    <section
      className={clsx(styles.section__hero, 'mt-20 relative overflow-hidden')}
    >
      <div
        className={clsx(styles.hero__introduction, 'mt-20 relative  w-full')}
      >
        <h1
          className={clsx(pinyonScript.className, 'heading-primary  text-8xl')}
        >
          Dio svake proslave!
        </h1>
        <p
          className={clsx(
            poppins.className,
            'text-2xl text-gray-600 font-medium mt-6'
          )}
        >
          Stvaramo nezaboravna sjećanja koja traju vječno.
        </p>
      </div>
    </section>
  );
};

export default Hero;
