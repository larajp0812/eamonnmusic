import React from "react";
import styles from "./Footer.module.scss";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Eamonn Walsh</p>
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
    </footer>
  );
};

export default Footer;
