import React from "react";
import styles from "./Tickets.module.scss";

export default function Tickets() {
  return (
    <div className={styles.tickets}>
      <section className={styles.tourDates}>
        <div className={styles.headers}>UPCOMING SHOWS</div>
        <ul>
          <div className={styles.divider} />
          <li>
            <strong className={styles.dates}>9th & 11th April 2026 </strong>
            <br />
            <span className={styles.venues}>Saint George’s</span>
            <br />
            <span className={styles.cities}>Mitchelstown</span>
            <br />
            <a
              href="https://buytickets.at/eamonnwalsh/2106777"
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
