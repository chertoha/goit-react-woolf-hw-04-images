import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import { Component } from 'react';
import { Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, largeImageURL, tags } = this.props;

    return (
      <>
        <Image src={webformatURL} alt={tags} onClick={this.openModal} />

        {isModalOpen && (
          <Modal
            imgSrc={largeImageURL}
            label={tags}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
