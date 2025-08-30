import Toggler from './Toggler';

const Header = ({ theme, themeText, switchTheme }) => {
  return (
    <header className='header'>
      <h1>devfinder</h1>
      <Toggler theme={theme} switchTheme={switchTheme} themeText={themeText} />
    </header>
  );
};
export default Header;
