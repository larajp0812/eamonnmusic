import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import styles from "./Testimonials.module.scss";

export default function Testimonials() {
  const location = useLocation();
  const sampleTestimonials = [
    {
      quote:
        "Eamonn brought such warmth to the evening and had everyone singing by the end of the first set.",
      author: "— Sarah M., Cork",
    },
    {
      quote:
        "Professional, easy to work with, and an amazing performer. The atmosphere was perfect from start to finish.",
      author: "— David R., Event Coordinator",
    },
    {
      quote:
        "A brilliant mix of traditional and contemporary songs — our guests are still talking about it.",
      author: "— Niamh & Colm, Private Event",
    },
  ];

  if (!location.state?.fromTestimonialsButton) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.testimonials}>
      <div className={styles.headers}>TESTIMONIALS</div>
      <div className={styles.divider} />

      <div className={styles.list}>
        {sampleTestimonials.map((item, index) => (
          <article key={index} className={styles.card}>
            <p className={styles.quote}>“{item.quote}”</p>
            <p className={styles.author}>{item.author}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
