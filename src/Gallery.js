import React from "react";
import styles from "./Gallery.module.scss";

// Import all images into an array
const images = [
  require("./images/gallery1.jpg"),
  require("./images/gallery6.JPG"),
  require("./images/gallery9.JPG"),
  require("./images/gallery10.JPG"),
  require("./images/gallery12.JPG"),
  require("./images/gallery14.JPG"),
  require("./images/gallery21.JPG"),
  require("./images/gallery23.JPG"),
  require("./images/gallery27.JPG"),
  require("./images/gallery28.JPG"),
  require("./images/gallery33.JPG"),
  require("./images/gallery35.JPG"),
  require("./images/gallery3.jpg"),
];

export default function Gallery() {
  let imgElements = [];
  let i = 0;
  while (i < images.length) {
    imgElements.push(<img src={images[i]} alt="" key={i} />);
    i++;
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.headers}>GALLERY</div>
      <div className={styles.divider} />
      <div className={styles.grid}>{imgElements}</div>
    </div>
  );
}
