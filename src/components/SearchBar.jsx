import { useState } from 'react';
import { Icon } from '../svg';
import toast from 'react-hot-toast';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const name = e.target.value.replaceAll(' ', '');
    setSearchTerm(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      toast.error('Please enter a GitHub User');
      return;
    }
    handleSearch(searchTerm);
  };

  return (
    <>
      <form className='search__form' onSubmit={handleSubmit}>
        <label htmlFor='search' className='sr-only'></label>
        <input
          type='search'
          id='search'
          onChange={handleChange}
          placeholder='Search GitHub username...'
        />
        <Icon name='search' />
        <button type='submit'>Search</button>
      </form>
    </>
  );
};
export default SearchBar;
