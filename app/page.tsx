import Image from "next/image";
import CommentPopup from "./components/CommentPopup";
import styles from "./page.module.css";

export default function Home() {
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
        <CommentPopup videoId="video-123" />
      </div>
    </div>
  );
}
