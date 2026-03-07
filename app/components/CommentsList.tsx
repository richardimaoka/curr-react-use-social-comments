'use client';

import React from 'react';
import { Comment } from './data';

interface CommentsListProps {
  commentsPromise: Promise<Comment[]>;
}

export default function CommentsList({ commentsPromise }: CommentsListProps) {
  const comments = React.use(commentsPromise);

  return (
    <div className="comments-list-container">
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {comments.map((comment: Comment) => (
            <li key={comment.id} className="comment-item">
              <strong>{comment.author}</strong>: {comment.content}
              <span className="comment-timestamp">{new Date(comment.timestamp).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
