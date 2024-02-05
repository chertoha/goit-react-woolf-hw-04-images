import PropTypes from 'prop-types';
import { IoMdSearch } from 'react-icons/io';
import { Form, Header, Input, SubmitButton } from './SearchBar.styled';

const SearchBar = ({ setError, setValue }) => {
  const onSubmitHandler = e => {
    e.preventDefault();

    const { value } = e.target.elements.searchImage;

    if (value === '') {
      setError('Empty query');
      return;
    }

    setValue(value.trim());
    e.target.reset();
  };

  return (
    <Header>
      <Form onSubmit={onSubmitHandler}>
        <SubmitButton type="submit">
          <IoMdSearch size={24} />
        </SubmitButton>

        <Input
          type="text"
          name="searchImage"
          autoFocus
          autoComplete="off"
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  setValue: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};
