import React, { FC } from 'react';

type HowItWorksProps = {
  content: {
    heading0: string;
    paragraph0: string;
    heading1: string;
    paragraph1: string;
    heading2: string;
    paragraph2: string;
  };
};

const HowItWorks: FC<HowItWorksProps> = ({ content }) => {
  const { heading0, paragraph0, heading1, paragraph1, heading2, paragraph2 } =
    content;

  return (
    <section id='howItWorks' className='py-24 border-b-2 border-white lg:px-10'>
      <div className='mx-auto max-w-7xl px-5'>
        <div className='mb-16 lg:mb-24'>
          <h3>{heading0}</h3>
          <h4>{paragraph0}</h4>
        </div>
        <div className='kids__text-box flex flex-col lg:grid grid-cols-3 gap-20'>
          <div className='kids__text'>
            <div className='flex items-center gap-4 mb-6'>
              {/* heading1 */}
              <div className='kids__icons-set flex items-center justify-center rounded-full h-12 w-12 lg:h-14 lg:w-14 bg-color-accent-main'></div>
              <h3>{heading1}</h3>
            </div>
            {/* paragraph1 */}
            <p>{paragraph1}</p>
          </div>

          <div className='step__1'>
            <div className='flex items-center gap-4 mb-6'>
              {/* heading2 */}
              <div className='kids__icons-set flex items-center justify-center rounded-full h-12 w-12 lg:h-14 lg:w-14 bg-color-accent-main'></div>
              <h3>{heading2}</h3>
            </div>
            {/* paragraph2 */}
            <p>{paragraph2}</p>
          </div>

          {/* Add more sections as needed for additional headings and paragraphs */}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
