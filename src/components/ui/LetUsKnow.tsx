'use client';
import { FC, useEffect, useState } from 'react';
import { icons } from '../../../assets/svg/Icons';

const LetUsKnow: FC = () => {
  const [isBigScreen, setIsBigScreen] = useState<boolean>(true);

  useEffect(() => {
    function toggleLetUsKnowComponent() {
      setIsBigScreen(window.innerWidth >= 1000);
    }

    toggleLetUsKnowComponent();

    window.addEventListener('resize', toggleLetUsKnowComponent);

    return () => window.removeEventListener('resize', toggleLetUsKnowComponent);
  }, [isBigScreen]);

  return isBigScreen ? (
    <div className='step  grid grid-cols-custom items-center gap-24  mb-24'>
      <div className='step__icon'>{icons.letUsKnow}</div>
      <div className='step__text'>
        <p className=' md:text-6xl text-7xl text-gray-300 font-bold mb-3'>02</p>
        <h4 className='text-gray-700 text-3xl font-bold mb-6'>
          Izaberite i personalizujte ponudu
        </h4>
        <p className='text-base md:text-lg text-gray-700'>
          Izaberite iz našeg obimnog izbora vrhunske opreme i dekoracije za
          događaje i pronađite savršene elemente za oživljavanje Vašeg događaja.
          Takođe, ako Vam je potrebna pomoć u organizaciji događaja, naš stručni
          tim može se pozabaviti logistikom, koordinacijom i ostalim sitnicama.
        </p>
      </div>
    </div>
  ) : (
    <div className='step flex flex-col items-center gap-12 mb-12'>
      <div className='step__text'>
        <p className='text-5xl  text-gray-300 font-bold mb-3'>02</p>
        <h4 className='text-gray-700 text-2xl  font-bold mb-4 lg:mb-6'>
          Izaberite i personalizujte ponudu
        </h4>
        <p className='text-base text-gray-700'>
          Izaberite iz našeg obimnog izbora vrhunske opreme i dekoracije za
          događaje i pronađite savršene elemente za oživljavanje Vašeg događaja.
          Takođe, ako Vam je potrebna pomoć u organizaciji događaja, naš stručni
          tim može se pozabaviti logistikom, koordinacijom i ostalim sitnicama.
        </p>
      </div>
      <div className='step__icon'>{icons.letUsKnow}</div>
    </div>
  );
};

export default LetUsKnow;
