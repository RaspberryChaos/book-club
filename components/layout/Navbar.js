import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link href="/"><span className={styles.logo}>Book club</span></Link>
      <nav>
        <ul>
          <li>
            <Link href="/meetings">All Meetings</Link>
          </li>
          <li>
            <Link href="/new-meeting">Add New Meeting</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
