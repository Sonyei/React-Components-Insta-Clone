import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { postDetails, likeButton} = props;

  return (
    <div className='post-border'>
      <PostHeader
        username={postDetails.username}
        thumbnailUrl={postDetails.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={postDetails.imageUrl}
        />
      </div>
      
      <LikeSection likeButton={evt => likeButton(postDetails.id)} numberOfLikes={postDetails.likes}/>
      <Comments comment={postDetails.comments}/>
    </div>
  );
};

export default Post;
