const UserStats = ({ user }) => {
  const { public_repos, followers, following } = user;
  return (
    <div className='user__stats'>
      <div>
        Repos
        <span>{public_repos}</span>
      </div>
      <div>
        Followers
        <span>{followers}</span>
      </div>
      <div>
        Following
        <span>{following}</span>
      </div>
    </div>
  );
};
export default UserStats;
