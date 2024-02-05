import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery, GalleryItem } from './ImageGallery.styled';
import ErrorComponent from 'components/ErrorComponent';
import { useEffect, useRef } from 'react';

const ImageGallery = ({ images }) => {
  const galeryRef = useRef();

  useEffect(() => {
    if (!galeryRef.current) return;

    const { height: cardHeight } =
      galeryRef.current.firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }, [images]);

  if (images.length === 0)
    return <ErrorComponent message="There are not any image here" />;

  return (
    <Gallery className="gallery" ref={galeryRef}>
      {images.map(image => (
        <GalleryItem key={image.webformatURL}>
          <ImageGalleryItem {...image} />
        </GalleryItem>
      ))}
    </Gallery>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
