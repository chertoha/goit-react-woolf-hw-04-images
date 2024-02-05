import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, StyledModal } from './Modal.styled';

const portalRef = document.getElementById('portal');

const Modal = ({ imgSrc, label, closeModal }) => {
  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const onEscButtonClose = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscButtonClose);

    return () => {
      window.removeEventListener('keydown', onEscButtonClose);
    };
  }, [closeModal]);

  return createPortal(
    <Overlay onClick={onOverlayClick}>
      <StyledModal>
        <img src={imgSrc} alt={label} />
      </StyledModal>
    </Overlay>,
    portalRef
  );
};

export default Modal;

Modal.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
