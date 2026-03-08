import CommentPopup from "./components/CommentPopup";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>My Video Page</h1>
      <CommentPopup videoId="video-123" />
    </div>
  );
}
