const UserInfo = () => {
  return (
    <div className='user__info'>
      <header className='user__info-header'>
        <h2>The Octocat</h2>
        <h3>
          <a href='/' target='_blank' rel='noreferrer'>
            @octocat
          </a>
        </h3>
        <p>Joined January 25 2011</p>
      </header>
      <p className='bio'>This profile has no bio</p>
    </div>
  );
};
export default UserInfo;
