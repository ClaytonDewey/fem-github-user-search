import { Icon } from '../svg';

const UserLinks = ({ idx, user, linkType }) => {
  const { location, twitter_username, blog, company } = user;
  let link;
  switch (linkType) {
    case 'location':
      link = location;
      break;
    case 'twitter':
      link = twitter_username;
      break;
    case 'blog':
      link = blog;
      break;
    case 'company':
      link = company;
      break;
    default:
      link = blog;
  }

  return (
    <div className={!link ? `user__link faded ${idx}` : `user__link ${idx}`}>
      <div>
        <Icon name={linkType} />
        {linkType === 'twitter' ? (
          link ? (
            <a
              href={`https://twitter.com/${link}`}
              target='_blank'
              rel='noreferrer'>
              {link}
            </a>
          ) : (
            'Not Available'
          )
        ) : linkType === 'website' ? (
          link ? (
            <a href={`https://${link}`} target='_blank' rel='noreferrer'>
              {link}
            </a>
          ) : (
            'Not Avaliable'
          )
        ) : link ? (
          <>{link}</>
        ) : (
          'Not Available'
        )}
      </div>
    </div>
  );
};
export default UserLinks;
