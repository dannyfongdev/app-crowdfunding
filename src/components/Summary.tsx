import styles from "./Summary.module.css";

export default function Summary(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.big}>$89,914</div>
      <div className={styles.small}>of $100,000 backed</div>
      <div className={styles.line}></div>
      <div className={styles.big}>5,007</div>
      <div className={styles.small}>total backers</div>
      <div className={styles.line}></div>
      <div className={styles.big}>56</div> <div className={styles.small}>days left</div>
    </div>
  );
}
