import { FC } from 'react';
import { icons } from '../../../assets/svg/Icons';
import clsx from 'clsx';
import { josefinSans } from '../../../utils/fonts';
import { Pointer, PartyPopper, HeartHandshake } from 'lucide-react';

type HowItWorksProps = {
  content: {
    heading0: string;
    heading1: string;
    heading2: string;
    heading3: string;
    paragraph0: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
};

const HowItWorks: FC<HowItWorksProps> = ({ content }) => {
  const {
    heading0,
    heading1,
    heading2,
    heading3,
    paragraph0,
    paragraph1,
    paragraph2,
    paragraph3,
  } = content;
  return (
    <section
      id='howItWorks'
      className='py-24  border-b-2 border-white lg:px-10'
    >
      <div className='mx-auto max-w-7xl px-5'>
        <div className='mb-16 lg:mb-24'>
          <h3
            className={clsx(
              josefinSans.className,
              'text-base font-bold tracking-wide uppercase text-color-accent-main mb-3'
            )}
          >
            {heading0}
          </h3>
          <h4 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700'>
            {paragraph0}
          </h4>
        </div>
        <div className='kids__text-box flex flex-col lg:grid grid-cols-3  gap-20 '>
          <div className='kids__text '>
            <div className='flex items-center gap-4 mb-6'>
              <div className='kids__icons-set flex items-center justify-center rounded-full h-12 w-12 lg:h-14 lg:w-14 bg-color-accent-main'>
                {<HeartHandshake className='stroke-color-gray-light-1' />}
              </div>
              <h3
                className={clsx(
                  josefinSans.className,
                  'text-xl text-color-accent-main'
                )}
              >
                {heading1}
              </h3>
            </div>
            <p className='text-base lg:text-lg text-gray-700 font-light'>
              {paragraph1}
            </p>
          </div>

          <div className='step__1'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='kids__icons-set flex items-center justify-center rounded-full h-12 w-12 lg:h-14 lg:w-14 bg-color-accent-main'>
                {<Pointer className='stroke-color-gray-light-1' />}
              </div>
              <h3
                className={clsx(
                  josefinSans.className,
                  'text-xl text-color-accent-main font-normal'
                )}
              >
                {heading2}
              </h3>
            </div>
            <p className='text-base lg:text-lg  text-gray-700 font-light'>
              {paragraph2}
            </p>
          </div>
          <div className='step__2'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='kids__icons-set flex items-center justify-center rounded-full h-12 w-12 lg:h-14 lg:w-14 bg-color-accent-main '>
                {<PartyPopper className='stroke-color-gray-light-1' />}
              </div>
              <h3
                className={clsx(
                  josefinSans.className,
                  'text-xl text-color-accent-main font-normal'
                )}
              >
                {heading3}
              </h3>
            </div>
            <p className='text-base lg:text-lg  text-gray-700 font-light'>
              {paragraph3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
