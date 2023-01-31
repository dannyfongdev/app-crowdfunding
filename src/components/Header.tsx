import styles from "./Header.module.css";

export default function Header(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className={styles.actions}>
        <button className={styles.btn}>Back this project</button>
        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
            <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
          </g>
        </svg>
      </div>
    </div>
  );
}
