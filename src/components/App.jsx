import useLocalStorage from 'use-local-storage';
import Header from './Header';
import SearchBar from './SearchBar';
import UserCard from './UserCard';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const apiUrl = 'https://api.github.com/users/';
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState('octocat');
  const [user, setUser] = useState({});

  const handleSearch = (user) => {
    fetch(`${apiUrl}${user}`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          setIsError(false);
          setUser(data);
          setIsLoading(false);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    handleSearch(userName);
  }, [userName]);

  const updateUser = (user) => {
    setUserName(user);
  };

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
      <Toaster position='top-center' />
      <div className='container'>
        <main className='main'>
          <Header
            theme={theme}
            themeText={themeText}
            switchTheme={switchTheme}
          />

          <SearchBar
            updateUser={updateUser}
            handleSearch={handleSearch}
            userName={userName}
          />

          <UserCard isLoading={isLoading} isError={isError} user={user} />
        </main>
      </div>
    </div>
  );
};
export default App;
