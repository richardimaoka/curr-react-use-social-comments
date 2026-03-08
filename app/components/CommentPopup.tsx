"use client";

import React, { useState } from "react";
import styles from "./CommentPopup.module.css";
import CommentsList from "./CommentsList";
import { Comment } from "./data";

function LoadingSpinner() {
  return (
    <div style={{ padding: "10px", textAlign: "center", color: "#555" }}>
      Loading comments...
    </div>
  );
}

interface CommentPopupProps {
  commentsPromise: Promise<Comment[]>;
}

export default function CommentPopup(props: CommentPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowComments = () => {
    setIsOpen(true);
  };

  const handleHideComments = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.component}>
      {isOpen && (
        <React.Suspense fallback={<LoadingSpinner />}>
          <CommentsList commentsPromise={props.commentsPromise} />
        </React.Suspense>
      )}

      <div className={styles.uiControls}>
        <div className={styles.buttonArea}>
          <button
            onClick={isOpen ? handleHideComments : handleShowComments}
            className={styles.button}
          >
            {isOpen ? "Hide Comments" : "Show Comments"}
          </button>
        </div>
      </div>
    </div>
  );
}
