"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Logo from "./Logo";

const navItems = [
  { title: "Central Events", href: "#central-events" },
  { title: "Department Events", href: "#department-events" },
  { title: "Sponsors", href: "#sponsors" },
  { title: "Contact Us", href: "#contact" },
  { title: "Register", href: "/register" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link key={item.title} href={item.href} className={styles.navLink}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
