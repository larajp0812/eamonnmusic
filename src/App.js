import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
// import Tickets from "./Tickets";
import About from "./About";
import Gallery from "./Gallery";
import Videos from "./Videos";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import styles from "./App.module.scss";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <div className={styles.appLayout}>
        <ScrollToTop />
        <Navbar />
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/tickets" element={<Tickets />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
