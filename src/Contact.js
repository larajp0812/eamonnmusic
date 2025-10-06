import React from "react";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.headers}>CONTACT</div>
      <div className={styles.divider} />
      <p>For bookings, collaborations, or inquiries, please email directly:</p>
      <a href="mailto:eamonnwmusic@gmail.com" className={styles.emailButton}>
        Email Eamonn Walsh
      </a>
    </div>
  );
}
