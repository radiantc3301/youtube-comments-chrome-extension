import React from 'react';
import './CommentList.css';

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          {comment.text}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
