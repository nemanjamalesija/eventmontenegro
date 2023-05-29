import { FC } from 'react';
import useramar from '../../../assets/img/useramar.jpg';
import userelisa from '../../../assets/img/userelisa.jpg';
import usernebuska from '../../../assets/img/usernebuska.jpg';
import usernemanja from '../../../assets/img/usernemanja.jpg';
import usernikola from '../../../assets/img/usernikola.jpg';
import usertanja from '../../../assets/img/usertanja.jpg';
import Image from 'next/image';
import vjencanje1 from '../../../assets/img/gallery1/vjencanje1.jpg';
import vjencanje2 from '../../../assets/img/gallery1/vjencanje2.jpg';
import vjencanje3 from '../../../assets/img/gallery1/vjencanje3.jpg';
import baloni1 from '../../../assets/img/gallery1/baloni1.avif';
import baloni2 from '../../../assets/img/gallery1/baloni2.avif';
import baloni3 from '../../../assets/img/gallery1/baloni3.avif';
import biznis1 from '../../../assets/img/gallery1/biznis1.jpg';
import biznis2 from '../../../assets/img/gallery1/biznis2.jpg';
import biznis3 from '../../../assets/img/gallery1/biznis3.jpg';
import kid1 from '../../../assets/img/gallery1/kid1.avif';
import kid2 from '../../../assets/img/gallery1/kid2.avif';
import kid3 from '../../../assets/img/gallery1/kid3.avif';

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

const gallery1 = [
  {
    image: vjencanje1,
  },
  {
    image: vjencanje2,
  },
  {
    image: vjencanje3,
  },
  {
    image: vjencanje1,
  },
  {
    image: biznis1,
  },
  {
    image: biznis2,
  },
  {
    image: biznis3,
  },
  {
    image: kid1,
  },
  {
    image: kid2,
  },
  {
    image: kid3,
  },
  {
    image: baloni1,
  },
  {
    image: baloni2,
  },
  {
    image: baloni3,
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
