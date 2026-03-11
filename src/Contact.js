import React from "react";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.card}>
        <div className={styles.headers}>CONTACT</div>
        <div className={styles.divider} />
        <p className={styles.subtitle}>
          For bookings, collaborations, or inquiries, please email directly:
        </p>
        <div className={styles.emailBox}>
          <a
            href="mailto:eamonnwmusic@gmail.com"
            className={styles.emailButton}
          >
            Email Eamonn Walsh
          </a>
        </div>
      </div>
    </div>
  );
}
