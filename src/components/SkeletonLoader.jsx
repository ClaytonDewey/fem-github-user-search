import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Icon } from '../svg';

const SkeletonLoader = () => {
  return (
    <SkeletonTheme
      enableAnimation={true}
      baseColor='var(--skeletonBase)'
      highlightColor='var(--skeletonHighlight)'>
      <div className='user__card'>
        <Skeleton circle={true} height={117} width={117} />
        <div>
          <div className='user__info'>
            <header className='user__info-header'>
              <h2>
                <Skeleton width={200} />
              </h2>
              <h3>
                <Skeleton width={150} />
              </h3>
              <Skeleton />
            </header>
            <p className='bio'>
              <Skeleton />
            </p>
          </div>

          <div className='user__stats'>
            <div>
              Repos
              <span>0</span>
            </div>
            <div>
              Followers
              <span>0</span>
            </div>
            <div>
              Following
              <span>0</span>
            </div>
          </div>

          <div className='user__card-links'>
            <div className='user__link div1'>
              <div>
                <Icon name='location' />
                <Skeleton />
              </div>
            </div>
            <div className='user__link faded div3'>
              <div>
                <Icon name='twitter' />
                <a href='/' target='_blank' rel='noreferrer'>
                  <Skeleton />
                </a>
              </div>
            </div>
            <div className='user__link div2'>
              <div>
                <Icon name='website' />
                <Skeleton />
              </div>
            </div>
            <div className='user__link div4'>
              <div>
                <Icon name='company' />
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};
export default SkeletonLoader;
