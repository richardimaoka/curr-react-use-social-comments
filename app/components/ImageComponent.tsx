import Image from "next/image";
import styles from "./ImageComponent.module.css";

export default function ImageComponent() {
  return (
    <Image
      src="/images/cat.webp"
      alt="Cat"
      className={styles.imageContainer}
      width={1080}
      height={1920} // This will be overridden by CSS
    />
  );
}