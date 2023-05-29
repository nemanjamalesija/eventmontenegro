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
import baloni2 from '../../../assets/img/gallery1/baloni2.webp';
import baloni3 from '../../../assets/img/gallery1/baloni3.avif';
import biznis1 from '../../../assets/img/gallery1/biznis1.jpg';
import biznis2 from '../../../assets/img/gallery1/biznis2.jpg';
import biznis3 from '../../../assets/img/gallery1/biznis3.jpg';
import kid1 from '../../../assets/img/gallery1/kid1.avif';
import kid2 from '../../../assets/img/gallery1/kid2.avif';
import kid3 from '../../../assets/img/gallery1/kid3.avif';
import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';

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
    image: usertanja,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem iusto quo maiores explicabo excepturi vero, ipsam quasi ',
    author: '- Ivana Boljević',
  },
];

const gallery1 = [
  {
    image: vjencanje1,
    description: 'Wedding decoration. Table with flowers',
  },
  {
    image: vjencanje2,
    description: 'Couple at the wedding',
  },
  {
    image: vjencanje3,
    description: 'Bouquet of flowers',
  },

  {
    image: kid1,
    description: 'Teenagers with a clown',
  },
  {
    image: kid2,
    description: 'Decoration on a rock',
  },
  {
    image: kid3,
    description: 'Kid painting with a smile',
  },
  {
    image: baloni1,
    description: 'Birthday baloons',
  },
  {
    image: baloni2,
    description: 'Couple kissing with baloons next to them',
  },
  {
    image: baloni3,
    description: 'Baloons decoration',
  },
  {
    image: biznis1,
    description: 'Business gathering. Business event',
  },
  {
    image: biznis3,
    description: 'Singer singing on a business event',
  },
  {
    image: biznis2,
    description: 'Business gathering. Business event',
  },
];

const Reviews: FC = () => {
  return (
    <section className='py-24 px-5 lg:px-10 bg-color-lightest'>
      <div className='flex flex-col gap-y-24 lg:grid lg:grid-cols-custom2fr lg:gap-x-20 '>
        <div className='flex flex-col'>
          <div className='mb-16 lg:mb-24'>
            <h2
              className={clsx(
                josefinSans.className,
                'text-base font-bold tracking-wide uppercase text-color-accent-main mb-3'
              )}
            >
              Mišljenje korisnika
            </h2>
            <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700'>
              Projekat ostvaren sa nama se ne zaboravlja
            </h3>
          </div>
          <div className='reviews flex flex-col lg:grid lg:grid-cols-custom2fr gap-y-10  lg:gap-x-24 lg:gap-y-20'>
            {reviews.map((r, i) => {
              return (
                <div key={i} className='review'>
                  <div className='review__author mb-3 lg:mb-4'>
                    <Image
                      src={r.image}
                      alt={r.author}
                      className='h-14 w-14  md:h-16 md:w-16 rounded-full object-cover'
                    />
                  </div>
                  <p className='review__text mb-4 md:mb-6 text-base md:text-lg text-gray-700'>
                    {r.text}
                  </p>
                  <span className='review__author text-sm  md:text-base text-gray-600'>
                    {r.author}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className='images grid grid-cols-custom3fr gap-x-2 gap-y-2 lg:gap-x-4 lg:gap-y-4 h-[640px] lg:h-auto'>
          {gallery1.map((img, i) => {
            return (
              <div key={i} className='img__box relative overflow-hidden'>
                <Image
                  src={img.image}
                  alt={img.description}
                  fill={true}
                  className='object-cover block transform hover:scale-110 transition-all duration-500 h-full w-full'
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
