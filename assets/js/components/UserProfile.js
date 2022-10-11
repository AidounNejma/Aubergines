import React from 'react'
import ProfileBanner from './jsx-components/ProfileBanner'
import UserNewsFeed from './jsx-components/UserNewsFeed';
import { FaHeart, FaRegCommentDots} from 'react-icons/fa';
import ButtonCreate from './jsx-components/ButtonCreate';
import '../../styles/pages/user-profile.scss';


const UserProfile = ({user, posts}) => {

  return (
    <div className='user-profile'>
        <ProfileBanner image={user.userBanner} user={user}/>
          {posts?.map(post => (
              <UserNewsFeed key={post.id} post={post} user={user} icon1={<FaHeart className='heart' color="red"/>} icon2={<FaRegCommentDots className='comment' color="black"/>} />
        ))}
        <div className='container-button-create'>
          <ButtonCreate/>
        </div>  
    </div>
  )
}

export default UserProfile