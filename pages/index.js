import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.text}>
          <h1 className={styles.heading}>Fictional Book Club</h1>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.btn}>Upcoming Meetings</button>
          <button className={styles.btn}>Add New Meeting</button>
        </div>
      </div>
    </div>
  );
}
