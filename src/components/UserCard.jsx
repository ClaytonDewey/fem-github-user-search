import UserInfo from './UserInfo';
import UserLinks from './UserLinks';
import UserStats from './UserStats';
import { Icon } from '../svg';

const UserCard = () => {
  return (
    <div className='user__card'>
      <img src='../temp-img/octo-cat.png' alt='octo-cat' />
      <div>
        <UserInfo />

        <UserStats />

        <div className='user__card-links'>
          <div className='user__link div1'>
            <div>
              <Icon name='location' />
              San Francisco
            </div>
          </div>

          <div className='user__link div2'>
            <div>
              <Icon name='website' />
              <a href='https://github.blog' target='_blank' rel='noreferrer'>
                https://github.blog
              </a>
            </div>
          </div>

          <div className='user__link faded div3'>
            <div>
              <Icon name='twitter' />
              Not Available
            </div>
          </div>

          <div className='user__link div4'>
            <div>
              <Icon name='company' />
              @github
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
