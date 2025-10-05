import React from "react";
import styles from "./Videos.module.scss";

export default function Videos() {
  return (
    <div className={styles.videos}>
      <div className={styles.headers}>VIDEOS</div>
      <div className={styles.divider} />
      <div className={styles.videoGrid}>
        <iframe
          src="https://www.youtube.com/embed/vYv9R8AFf8w"
          title="Nella Fanstasia"
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed/nkp68jCLXvs"
          title="Oh Holy Night"
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed/twi4EOEGAjI"
          title="Grace"
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed/MCqBw4D_34U"
          title="Turning Page"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
