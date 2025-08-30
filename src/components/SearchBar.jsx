import { Icon } from '../svg';
const SearchBar = () => {
  return (
    <form className='search-form'>
      <input type='search' placeholder='Search GitHub username...' />
      <Icon name='search' />
      {/* error stuff here... */}
      <button type='submit'>Search</button>
    </form>
  );
};
export default SearchBar;
