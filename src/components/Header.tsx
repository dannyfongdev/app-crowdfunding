import { useState } from 'react';
import styles from "./Header.module.css";

interface HeaderProps {
  onBackThisProject: () => void;
}

// @todo clicking bookmark should change size of other button


export default function Header({ onBackThisProject }: HeaderProps): JSX.Element {
  const [bookmarked, setBookmarked] = useState(false)
  const [bookmarkHover, setBookmarkHover] = useState(false)

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
  }

  const isHighlighted = () => {
    return (bookmarked || bookmarkHover);
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
        <div className={styles.bookmarkWrapper} onClick={handleBookmarkClick} onMouseEnter={()=>{setBookmarkHover(true)}} onMouseLeave={()=>{setBookmarkHover(false)}}>
          <img className={styles.bookmarkIcon} src={isHighlighted() ? "./images/icon-bookmarked.svg" : "./images/icon-bookmark.svg"} alt="bookmark icon"/>
          <span className={isHighlighted() ? styles.bookmarkLabelGreen : styles.bookmarkLabel}>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
        </div>
        
      </div>
    </div>
  );
}
