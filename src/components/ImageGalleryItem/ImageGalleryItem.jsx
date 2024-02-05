import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import { useState } from 'react';
import { Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Image src={webformatURL} alt={tags} onClick={openModal} />

      {isModalOpen && (
        <Modal imgSrc={largeImageURL} label={tags} closeModal={closeModal} />
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
