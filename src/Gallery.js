import React from "react";
import gallery1 from "./images/gallery1.jpg";
import gallery2 from "./images/gallery2.jpg";
import gallery3 from "./images/gallery3.jpg";
import gallery4 from "./images/gallery4.jpg";
import gallery5 from "./images/gallery5.JPG";
import gallery6 from "./images/gallery6.JPG";
import gallery7 from "./images/gallery7.JPG";
import gallery8 from "./images/gallery8.JPG";
import gallery9 from "./images/gallery9.JPG";
import gallery10 from "./images/gallery10.JPG";
import gallery11 from "./images/gallery11.JPG";
import gallery12 from "./images/gallery12.JPG";
import gallery13 from "./images/gallery13.JPG";
import gallery14 from "./images/gallery14.JPG";
import gallery15 from "./images/gallery15.JPG";
import gallery16 from "./images/gallery16.JPG";
import gallery17 from "./images/gallery17.JPG";
import gallery18 from "./images/gallery18.JPG";
import gallery19 from "./images/gallery19.JPG";
import gallery20 from "./images/gallery20.JPG";
import gallery21 from "./images/gallery21.JPG";
import gallery22 from "./images/gallery22.JPG";
import gallery23 from "./images/gallery23.JPG";
import gallery24 from "./images/gallery24.JPG";
import gallery25 from "./images/gallery25.JPG";
import gallery26 from "./images/gallery26.JPG";
import gallery27 from "./images/gallery27.JPG";
import gallery28 from "./images/gallery28.JPG";
import gallery29 from "./images/gallery29.JPG";
import gallery30 from "./images/gallery30.JPG";

import styles from "./Gallery.module.scss";

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.grid}>
        <img src={gallery1} alt="" />
        <img src={gallery4} alt="" />
        <img src={gallery5} alt="" />
        <img src={gallery6} alt="" />
        <img src={gallery7} alt="" />
        <img src={gallery8} alt="" />
        <img src={gallery9} alt="" />
        <img src={gallery10} alt="" />
        <img src={gallery11} alt="" />
        <img src={gallery12} alt="" />
        <img src={gallery13} alt="" />
        <img src={gallery14} alt="" />
        <img src={gallery15} alt="" />
        <img src={gallery16} alt="" />
        <img src={gallery17} alt="" />
        <img src={gallery18} alt="" />
        <img src={gallery19} alt="" />
        <img src={gallery20} alt="" />
        <img src={gallery21} alt="" />
        <img src={gallery22} alt="" />
        <img src={gallery23} alt="" />
        <img src={gallery24} alt="" />
        <img src={gallery25} alt="" />
        <img src={gallery27} alt="" />
        <img src={gallery28} alt="" />
        <img src={gallery29} alt="" />
        <img src={gallery30} alt="" />
        <img src={gallery3} alt="" />
      </div>
      <div className={styles.caption}>
        <h1>Gallery</h1>
        <p>A collection of photos from various performances and events.</p>
      </div>
    </div>
  );
}
