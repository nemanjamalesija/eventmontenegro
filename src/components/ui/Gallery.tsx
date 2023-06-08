import Image from 'next/image';
import { FC } from 'react';

type galleryProps = {
  src1: string;
  src2: string;
  src3: string;
  src4: string;
  src5: string;
  src6: string;
  src7: string;
  src8: string;
  src9: string;
  src10: string;
  src11: string;
  src12: string;
  src13: string;
  src14: string;
  src15: string;
  src16: string;
  src17: string;
  src18: string;
  src19: string;
  src20: string;
  src21: string;
  src22: string;
  src23: string;
  src24: string;
  src25: string;
  src26: string;
};

const Gallery: FC<galleryProps> = ({
  src1,
  src2,
  src3,
  src4,
  src5,
  src6,
  src7,
  src8,
  src9,
  src10,
  src11,
  src12,
  src13,
  src14,
  src15,
  src16,
  src17,
  src18,
  src19,
  src20,
  src21,
  src22,
  src23,
  src24,
  src25,
  src26,
}) => {
  return (
    <div className='gallery grid '>
      <figure className='gallery__item gallery__item--1 relative'>
        <Image
          src={src1}
          alt='gallery image 1'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--2 relative'>
        <Image
          src={src2}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--3 relative'>
        <Image
          src={src3}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--4 relative'>
        <Image
          src={src4}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--5 relative'>
        <Image
          src={src5}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--6 relative'>
        <Image
          src={src6}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--7 relative'>
        <Image
          src={src7}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--8 relative'>
        <Image
          src={src8}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>

      <figure className='gallery__item gallery__item--10 relative'>
        <Image
          src={src9}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--11 relative'>
        <Image
          src={src10}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--12 relative'>
        <Image
          src={src11}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--13 relative'>
        <Image
          src={src12}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--14 relative'>
        <Image
          src={src13}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>

      <figure className='gallery__item gallery__item--15 relative'>
        <Image
          src={src14}
          alt='gallery image 1'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--16 relative'>
        <Image
          src={src15}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--17 relative'>
        <Image
          src={src16}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--18 relative'>
        <Image
          src={src17}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--19 relative'>
        <Image
          src={src18}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--20 relative'>
        <Image
          src={src19}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--21 relative'>
        <Image
          src={src20}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--22 relative'>
        <Image
          src={src21}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--23 relative'>
        <Image
          src={src22}
          alt='gallery image 2'
          className='gallery__img block object-cover '
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--24 relative'>
        <Image
          src={src23}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--25 relative'>
        <Image
          src={src24}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--26 relative'>
        <Image
          src={src25}
          alt='gallery image 2'
          className='gallery__img block object-cover'
          fill
        />
      </figure>
      <figure className='gallery__item gallery__item--9 relative'>
        <Image
          src={src26}
          alt='gallery image 2'
          className='gallery__img block object-cover '
          fill
        />
      </figure>
    </div>
  );
};

export default Gallery;
