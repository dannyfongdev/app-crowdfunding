import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <img src="./images/logo.svg" alt="crowdfund logo" />
        <ul className={styles.menu}>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </div>
      <div className={styles.closeIcon}>
        <img src="./images/icon-close-menu.svg" alt="close menu icon" />
      </div>

      <div className={styles.overlay}></div>
    </div>
  );
}
