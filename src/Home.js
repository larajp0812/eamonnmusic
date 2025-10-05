import React from "react";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero section */}
      <section className={styles.hero}></section>

      {/* Tour dates */}
      <section className={styles.tourDates}>
        <div className={styles.headers}>UPCOMING SHOWS</div>
        <ul>
          <li>
            <strong className={styles.dates}>28th November 2025 </strong>
            <br />
            <span className={styles.venues}>Triskel Arts Centre</span>
            <br />
            <span className={styles.cities}>Cork</span>
            <br />
            <a
              href="https://triskelarts.ticketsolve.com/ticketbooth/shows/873658613"
              target="_blank"
              rel="noreferrer"
              className={styles.bookTickets}
            >
              Book Tickets
            </a>
          </li>
          <div className={styles.divider} />
          <li>
            <strong className={styles.dates}>11th December 2025</strong>
            <br />
            <span className={styles.venues}>
              Irish Cultural Centre, Hammersmith
            </span>
            <br />
            <span className={styles.cities}>London</span>
            <br />
            <a
              href="https://www.irishculture.org/"
              target="_blank"
              rel="noreferrer"
              className={styles.bookTickets}
            >
              Book Tickets
            </a>
          </li>
          <div className={styles.divider} />
          <li>
            <strong className={styles.dates}>19th December 2025</strong>
            <br />
            <span className={styles.venues}>Mitchelstown Leisure Centre</span>
            <br />
            <span className={styles.cities}>Mitchelstown</span>
            <br />
            <a
              href="https://www.eventbrite.ie/e/1592394999309?aff=oddtdtcreator"
              target="_blank"
              rel="noreferrer"
              className={styles.bookTickets}
            >
              Book Tickets
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
