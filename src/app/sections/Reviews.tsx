import { FC } from 'react';
import useramar from '../../../assets/img/useramar.jpg';
import userelisa from '../../../assets/img/userelisa.jpg';
import usernebuska from '../../../assets/img/usernebuska.jpg';
import usernemanja from '../../../assets/img/usernemanja.jpg';
import usernikola from '../../../assets/img/usernikola.jpg';
import usertanja from '../../../assets/img/usertanja.jpg';
import Image from 'next/image';

const reviews = [
  {
    image: useramar,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem iusto quo maiores explicabo excepturi vero, ipsam quasi ',
    author: 'Amar Smaković',
  },
  {
    image: userelisa,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem iusto quo maiores explicabo excepturi vero, ipsam quasi ',
    author: '- Elisa Vincent',
  },
  {
    image: usernebuska,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem iusto quo maiores explicabo excepturi vero, ipsam quasi ',
    author: '- Nebojša i Ena Bojić',
  },
  {
    image: usernemanja,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem iusto quo maiores explicabo excepturi vero, ipsam quasi ',
    author: '- Nemanja Malesija',
  },
  {
    image: usernikola,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem iusto quo maiores explicabo excepturi vero, ipsam quasi ',
    author: '- Nikola Vukčević',
  },
  {
    image: usertanja,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem iusto quo maiores explicabo excepturi vero, ipsam quasi ',
    author: '- Ivana Boljević',
  },
];

const Reviews: FC = () => {
  return (
    <section className='py-24 px-10 bg-color-lightest'>
      <div className='grid grid-cols-custom2fr '>
        <div className='reviews grid grid-cols-custom2fr gap-x-16 gap-y-8'>
          {reviews.map((r, i) => {
            return (
              <div key={i} className='review'>
                <div className='review__author mb-4'>
                  <Image
                    src={r.image}
                    alt={r.author}
                    className='h-16 w-16 rounded-full object-cover'
                  />
                </div>
                <p className='review__text mb-6 text-lg text-gray-700'>
                  {r.text}
                </p>
                <span className='review__author text-base text-gray-600'>
                  {r.author}
                </span>
              </div>
            );
          })}
        </div>
        <div className='images'></div>
      </div>
    </section>
  );
};

export default Reviews;
