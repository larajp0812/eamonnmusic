import React from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.headers}>CONTACT</div>
      <div className={styles.divider} />

      <div className={styles.contactBlock}>
        <p className={styles.description}>
          For bookings, collaborations, or inquiries, please email directly.
        </p>
        <a href="mailto:your@email.com" className={styles.emailButton}>
          Email Eamonn Walsh
        </a>
      </div>

      <div className={styles.contactBlock}>
        <p className={styles.description}>
          To view testimonials from past clients and collaborators.
        </p>
        <Link
          to="/testimonials"
          state={{ fromTestimonialsButton: true }}
          className={styles.emailButton}
        >
          View Testimonials
        </Link>
      </div>
    </div>
  );
}
