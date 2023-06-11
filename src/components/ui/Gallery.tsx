import Image from 'next/image';
import { FC } from 'react';

type GalleryProps = {
  srcArray: string[];
};

const Gallery: FC<GalleryProps> = ({ srcArray }) => {
  return (
    <div className='gallery grid'>
      {srcArray.map((src, index) => (
        <figure
          className={`gallery__item gallery__item--${index + 1} relative `}
          key={index}
        >
          <Image
            src={src}
            alt={`gallery__image gallery__image--${index + 1}`}
            className='gallery__img block object-cover'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </figure>
      ))}
    </div>
  );
};

export default Gallery;
