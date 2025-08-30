const UserInfo = ({ user, joinedDate }) => {
  const { name, html_url, login, bio } = user;
  return (
    <div className='user__info'>
      <header className='user__info-header'>
        {name ? <h2>{name}</h2> : <h2>Not Available</h2>}
        <h3>
          <a href={html_url} target='_blank' rel='noreferrer'>
            @{login}
          </a>
        </h3>
        <p>Joined {joinedDate}</p>
      </header>
      {!bio ? (
        <p className='bio'>This profile has no bio</p>
      ) : (
        <p className='bio'>{bio}</p>
      )}
    </div>
  );
};
export default UserInfo;
