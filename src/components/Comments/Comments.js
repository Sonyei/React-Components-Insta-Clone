import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comment } = props;


  return (
    <div>
      {comment.map(comment => {
        return (
        <Comment 
        key={comment.id} 
        comments={comment} />
        )
      })
    }
    </div>
  )
};

export default Comments;
