import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, StyledModal } from './Modal.styled';

const portalRef = document.getElementById('portal');

class Modal extends Component {
  onEscButtonClose = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscButtonClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscButtonClose);
  }

  render() {
    const { imgSrc, label } = this.props;
    return createPortal(
      <Overlay onClick={this.onOverlayClick}>
        <StyledModal>
          <img src={imgSrc} alt={label} />
        </StyledModal>
      </Overlay>,
      portalRef
    );
  }
}

export default Modal;

Modal.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
