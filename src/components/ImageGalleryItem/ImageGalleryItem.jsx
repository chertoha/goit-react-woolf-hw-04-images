import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import { useState } from 'react';
import { Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <Image src={webformatURL} alt={tags} onClick={toggleModal} />

      {isModalOpen && (
        <Modal imgSrc={largeImageURL} label={tags} closeModal={toggleModal} />
      )}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
