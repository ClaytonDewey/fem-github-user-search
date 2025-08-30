import { Icon } from '../svg';
const SearchBar = () => {
  return (
    <form className='search__form'>
      <label htmlFor='search' className='sr-only'></label>
      <input
        type='search'
        id='search'
        placeholder='Search GitHub username...'
      />
      <Icon name='search' />
      {/* error stuff here... */}
      <button type='submit'>Search</button>
    </form>
  );
};
export default SearchBar;
