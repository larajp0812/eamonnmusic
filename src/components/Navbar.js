import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShow(true);
      } else if (window.scrollY > lastScrollY.current) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${show ? styles.show : styles.hide}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.mainLink}>
          Eamonn Walsh
        </Link>

        {/* Desktop links */}
        <div className={styles.links}>
          <Link to="/tickets">Tickets</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/contact">Contact</Link>
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

        {/* Burger icon */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Overlay menu */}
      {menuOpen && (
        <div className={styles.overlay}>
          <button
            className={styles.close}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/tickets" onClick={() => setMenuOpen(false)}>
                Tickets
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/videos" onClick={() => setMenuOpen(false)}>
                Videos
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li className={styles.socials}>
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
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
