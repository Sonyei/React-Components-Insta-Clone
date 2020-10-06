import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;



  return (
    <div>
      {/* {postObj.comments.map(text => {
        return <div key={comments}>{comments}</div>
      })} */}
    </div>
  );
};

export default Comments;
