import PropTypes from 'prop-types';
import { StyledButton } from './LoadMoreButton.styled';

const LoadMoreButton = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Load more</StyledButton>;
};

export default LoadMoreButton;

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
