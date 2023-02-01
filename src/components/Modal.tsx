import styles from "./Modal.module.css";

export default function Modal(): JSX.Element {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Back this project</h2>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </div>
    </div>
  );
}
