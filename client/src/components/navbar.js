import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.sideNav}>
      <div className={styles.siteTitle}>
        <Link to="/">Quote</Link>
      </div>
      <ul className={styles.navList}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <li className={styles.navLink}>Writing</li>
        <ul className={styles.navSubList}>
          <Link to="/editor" className={styles.navSubLink}>
            Question Writer
          </Link>
          <Link to="/all-questions" className={styles.navSubLink}>
            All Questions
          </Link>
        </ul>
        <li className={styles.navLink}>Editing</li>
        <ul className={styles.navSubList}>
          <Link to="/editor" className={styles.navSubLink}>
            Set Overview
          </Link>
          <Link to="/packetizing" className={styles.navSubLink}>
            Packetizing
          </Link>
          <Link to="/set-admin" className={styles.navSubLink}>
            Set Admin
          </Link>
        </ul>
      </ul>
    </nav>
  );
}
