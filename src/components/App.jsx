import useLocalStorage from 'use-local-storage';
import Header from './Header';

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const themeText = theme === 'light' ? 'dark' : 'light';

  return (
    <div className='app' data-theme={theme}>
      <Header theme={theme} themeText={themeText} switchTheme={switchTheme} />
    </div>
  );
};
export default App;
