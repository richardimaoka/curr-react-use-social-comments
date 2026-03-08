import CommentPopup from "./components/CommentPopup";
import { fetchComments } from "./components/data";
import styles from "./page.module.css";
import ImageComponent from "./components/ImageComponent";

export default async function Home() {
  const commentsPromise = fetchComments("video-123");

  return (
    <div className={styles.page}>
      <ImageComponent />
      <div className={styles.contents}>
        <CommentPopup commentsPromise={commentsPromise} />
      </div>
    </div>
  );
}
