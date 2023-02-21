import { useState } from 'react';
import styles from "./Header.module.css";

interface HeaderProps {
  onBackThisProject: () => void;
}

// @todo bookmark hover effect
// @todo bookmarkLabel text alignment


export default function Header({ onBackThisProject }: HeaderProps): JSX.Element {
  const [bookmarked, setBookmarked] = useState(false)

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
  }

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="./images/logo-mastercraft.svg" alt="logo" />
      <h1 className={styles.title}>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className={styles.actions}>
        <button className={styles.btn} onClick={onBackThisProject}>Back this project</button>
        <div className={styles.bookmarkWrapper} onClick={handleBookmarkClick}>
          <img className={styles.bookmarkIcon} src={!bookmarked ? "./images/icon-bookmark.svg" : "./images/icon-bookmarked.svg"} alt="bookmark icon"/>
          <span className={styles.bookmarkLabel}>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
        </div>
        
      </div>
    </div>
  );
}
