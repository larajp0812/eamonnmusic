import React from "react";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero section */}
      <section className={styles.hero}></section>

      {/* Tour dates */}
      <section className={styles.tourDates}>
        <h2>Upcoming Shows</h2>
        <ul>
          <li>
            <strong>28th November – Cork</strong>
            <br />
            Triskel Arts Centre, Cork
            <br />
            <a
              href="https://www.triskelartscentre.ie/"
              target="_blank"
              rel="noreferrer"
              className={styles.bookTickets}
            >
              Book Tickets
            </a>
          </li>
          <li>
            <strong>11th December – London</strong>
            <br />
            Irish Cultural Centre, Hammersmith
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
          <li>
            <strong>19th December – Mitchelstown</strong>
            <br />
            Mitchelstown Leisure Centre
            <br />
            <a
              href="https://www.ticketmaster.ie/"
              target="_blank"
              rel="noreferrer"
              className={styles.bookTickets}
            >
              Book Tickets
            </a>
          </li>
        </ul>
      </section>

      {/* YouTube carousel */}
      <section className={styles.videos}>
        <h2>Videos</h2>
        <div className={styles.carousel}>
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
            title="YouTube Video 3"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
