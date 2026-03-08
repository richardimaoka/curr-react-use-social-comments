import Image from "next/image";
import CommentPopup from "./components/CommentPopup";
import { fetchComments } from "./components/data";
import styles from "./page.module.css";

export default async function Home() {
  const commentsPromise = fetchComments("video-123");

  return (
    <div className={styles.page}>
      <Image
        src="/images/cat.webp"
        alt="Cat"
        className={styles.imageContainer}
        width={1080}
        height={1920} // This will be overridden by CSS
      />
      <div className={styles.contents}>
        <CommentPopup commentsPromise={commentsPromise} />
      </div>
    </div>
  );
}
