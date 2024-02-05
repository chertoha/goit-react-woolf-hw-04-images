import PropTypes from 'prop-types';
import { Message, Wrapper } from './ErrorComponent.styled';

const ErrorComponent = ({ message }) => {
  return (
    <Wrapper>
      <Message>{message}</Message>
    </Wrapper>
  );
};

export default ErrorComponent;

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
