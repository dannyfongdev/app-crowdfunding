import styles from "./Header.module.css";

interface HeaderProps {
  onBackThisProject: () => void;
}

// @todo bookmark hover, select

export default function Header({ onBackThisProject }: HeaderProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="./images/logo-mastercraft.svg" alt="logo" />
      <h1 className={styles.title}>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className={styles.actions}>
        <button className={styles.btn} onClick={onBackThisProject}>Back this project</button>
        <div className={styles.bookmarkWrapper}>
          <img className={styles.bookmarkIcon} src="./images/icon-bookmark.svg" />
          <span className={styles.bookmarkLabel}>Bookmark</span>
        </div>
        
      </div>
    </div>
  );
}
