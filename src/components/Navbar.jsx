"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

const navItems = [
  { title: "Central Events", hash: "#central-events" },
  { title: "Department Events", hash: "#department-events" },
  { title: "Sponsors", hash: "#sponsors" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (hash) => {
    // Redirect to the home page with the hash
    router.push(`/${hash}`);
    setIsOpen(false); // Close the menu after navigation
  };

  return (
    <div className={styles.navContainer}>
      <Logo />
      <button
        className={`${styles.menuButton} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className={`${styles.dot} ${styles.dot1}`} />
        <div className={`${styles.dot} ${styles.dot2}`} />
        <div className={`${styles.dot} ${styles.dot3}`} />
        <div className={`${styles.dot} ${styles.dot4}`} />
      </button>
      <div className={`${styles.navbar} ${isOpen ? styles.active : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.title}
            className={styles.navLink}
            onClick={() => handleNavigation(item.hash)}
          >
            {item.title}
          </button>
        ))}

        <Link
          href="/contact-us"
          className={`${styles.navLink} ${styles.centered}`} // Add centered class
          onClick={() => setIsOpen(false)}
        >
          Contact-us
        </Link>
        <Link
          href="/register"
          className={`${styles.navLink} ${styles.centered}`} // Add centered class
          onClick={() => setIsOpen(false)}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
