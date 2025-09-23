import React from "react";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <p>
        For bookings, collaborations, or press inquiries, please get in touch
        using the form below or via email.
      </p>
      <form className={styles.form}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
