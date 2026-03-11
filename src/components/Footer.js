import React from "react";
import styles from "./Footer.module.scss";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a
          href="https://instagram.com/eamonnjwalsh"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCU6DnMKiPR3vYQtxpfTN4lg"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Eamonn Walsh</p>
      <p className={styles.credit}>Website by Lara Johnson-Perkins</p>
    </footer>
  );
};

export default Footer;
