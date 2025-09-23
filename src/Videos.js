import React from "react";
import styles from "./Videos.module.scss";

export default function Videos() {
  return (
    <div className={styles.videos}>
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
        <iframe
          src="https://www.youtube.com/embed/-mIvx2p1m-c"
          title="Jolene"
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed/-zxzn_JGCI8"
          title="I've been waiting for you"
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed/jv_cEzPIAU4"
          title="We dont have to take our clothes off"
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          src="https://www.youtube.com/embed/LYZOuxMEp00"
          title="Perfect"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
