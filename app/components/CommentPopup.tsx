'use client';

import React, { useState } from 'react';
import CommentsList from './CommentsList';
import { fetchComments, Comment } from './data';

function LoadingSpinner() {
  return (
    <div style={{ padding: '10px', textAlign: 'center', color: '#555' }}>
      Loading comments...
    </div>
  );
}

interface CommentPopupProps {
  videoId: string;
}

export default function CommentPopup({ videoId }: CommentPopupProps) {
  const [commentsPromise, setCommentsPromise] = useState<Promise<Comment[]> | null>(null);

  const handleShowComments = () => {
    if (!commentsPromise) {
      setCommentsPromise(fetchComments(videoId));
    }
  };

  const handleHideComments = () => {
    setCommentsPromise(null);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', maxWidth: '600px', margin: '20px auto' }}>
      <button 
        onClick={commentsPromise ? handleHideComments : handleShowComments}
        style={{ 
          padding: '10px 15px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        {commentsPromise ? 'Hide Comments' : 'Show Comments'}
      </button>

      {commentsPromise && (
        <React.Suspense fallback={<LoadingSpinner />}>
          <CommentsList commentsPromise={commentsPromise} />
        </React.Suspense>
      )}
    </div>
  );
}
