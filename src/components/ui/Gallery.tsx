'use client';
import ImageGallery from 'react-image-gallery';
import '../../app/gallery.css';

type GalleryImage = {
  original: string;
  thumbnail: string;
};

type GalleryProps = {
  images: GalleryImage[];
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      showFullscreenButton={false}
      slideOnThumbnailOver={true}
      showIndex={true}
    />
  );
};

export default Gallery;
