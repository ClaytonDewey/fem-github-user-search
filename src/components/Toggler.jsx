import { Icon } from '../svg';

const Toggler = ({ theme, themeText, switchTheme }) => {
  return (
    <div className='toggler'>
      <div className='toggle-container'>
        <label htmlFor='mode' className='label'>
          <span>{themeText} </span>
          {theme === 'light' ? <Icon name='moon' /> : <Icon name='sun' />}
          <input
            type='checkbox'
            id='mode'
            className={`toggle ${theme}`}
            onChange={switchTheme}
          />
        </label>
      </div>
    </div>
  );
};
export default Toggler;
