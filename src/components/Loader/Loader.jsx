import { Oval } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <Oval
        visible={true}
        height="60"
        width="60"
        color="#a6a2c9"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Wrapper>
  );
};

export default Loader;
