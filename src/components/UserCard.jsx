import SkeletonLoader from './SkeletonLoader';
import UserInfo from './UserInfo';
import UserLinks from './UserLinks';
import UserStats from './UserStats';

const UserCard = ({ user, isLoading, isError }) => {
  const { created_at, avatar_url, name } = user;
  const joinedDate = new Date(Date.parse(created_at))
    .toLocaleDateString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
    .replace(',', ' ');

  const links = ['location', 'website', 'twitter', 'company'];

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className={isError ? 'user__card-flex' : 'user__card'}>
      {isError ? (
        <div className='alert'>No user found...</div>
      ) : (
        <>
          <img src={avatar_url} alt={`${name}'s avatar`} />
          <div>
            <UserInfo user={user} joinedDate={joinedDate} />

            <UserStats user={user} />

            <div className='user__card-links'>
              {links.map((link, idx) => {
                return (
                  <UserLinks
                    key={idx}
                    idx={`div${idx + 1}`}
                    user={user}
                    linkType={link}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default UserCard;
