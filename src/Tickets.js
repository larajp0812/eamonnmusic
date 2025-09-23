import React from "react";
import styles from "./Tickets.module.scss";

export default function Tickets() {
  return (
    <div className={styles.tickets}>
      <p>
        Find and book tickets for upcoming <strong>Eamonn Walsh</strong> shows.
      </p>
      <ul>
        <li>
          <span>28th November – Cork</span> —
          <a
            href="https://www.triskelartscentre.ie/"
            target="_blank"
            rel="noreferrer"
          >
            Book Now
          </a>
        </li>
        <li>
          <span>11th December – London</span> —
          <a
            href="https://www.irishculture.org/"
            target="_blank"
            rel="noreferrer"
          >
            Book Now
          </a>
        </li>
        <li>
          <span>19th December – Mitchelstown</span> —
          <a
            href="https://www.ticketmaster.ie/"
            target="_blank"
            rel="noreferrer"
          >
            Book Now
          </a>
        </li>
      </ul>
    </div>
  );
}
