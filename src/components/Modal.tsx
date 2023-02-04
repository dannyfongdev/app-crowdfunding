import styles from "./Modal.module.css";

interface ModalProps {
  children?: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps): JSX.Element {
  const handleClick = (target: HTMLElement) => {
    // console.log(target.classList.value);
    // if overlay (outside the white box) was clicked, then close the modal
    if (target.classList.value.includes("overlay")) {
      onClose();
    }
    // if close-modal icon was clicked, then close the modal
    if (target.classList.value.includes("close-modal")) {
      onClose();
    }
  };

  return (
    <div
      className={styles.overlay}
      onClick={(e) => handleClick(e.target as HTMLElement)}
    >
      <div className={styles.modal}>
        <div className={styles.titleWrapper}>
          <h2>Back this project</h2>
          <img
            className="close-modal"
            src="./images/icon-close-modal.svg"
          ></img>
        </div>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        {children}
      </div>
    </div>
  );
}
