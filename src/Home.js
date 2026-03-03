import React from "react";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero section */}
      <section className={styles.hero}></section>

      {/* Tour dates */}
      <section className={styles.tourDates}>
        <div className={`${styles.headers} ${styles.announcement}`}>
          Easter and Summer shows to be announced soon
        </div>
      </section>
    </div>
  );
}
