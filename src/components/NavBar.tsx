import { useState, useEffect } from 'react'
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  /*
    Need to know isMobile width because desktop version of menu should be shown if not mobile view
    and close icon should not be shown
  */
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  const isMobile = width <= 768;

  // handles clicks on open (hamburger) icon, close (x) icon and menu (ul)
  const toggleMenu = () => {
    if (isMobile) {
      setShowMenu(!showMenu)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <img src="./images/logo.svg" alt="crowdfund logo" />
        { (showMenu || !isMobile) && <ul className={styles.menu} onClick={toggleMenu}>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>}
      </div>

      {/* X - close menu + semi-transparent background */}
      { showMenu && <><div className={styles.closeIcon}  onClick={toggleMenu}>
        <img src="./images/icon-close-menu.svg" alt="close menu icon" />
      </div> <div className={styles.overlay}></div></>}
      
      {/* "hambergur" open menu icon */}
      { !showMenu && <div className={styles.hamburger} onClick={toggleMenu}>
        <img src="./images/icon-hamburger.svg" alt="open menu icon" />
      </div>}
    </div>
  );
}
