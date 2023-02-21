import styles from "./Modal.module.css";

interface ModalProps {
  children?: React.ReactNode;
  onClose: () => void;
  title?: string;
  showTitleBar?: boolean;
  narrow?: boolean;
}

export default function Modal({ children, onClose, title="Back this project", showTitleBar=true, narrow=false }: ModalProps): JSX.Element {
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
      <div className={narrow ? styles.modalNarrow : styles.modal}>
        {showTitleBar && <div className={styles.titleWrapper}>
          <h2>{title}</h2>
          <img
            className="close-modal"
            src="./images/icon-close-modal.svg"
          ></img>
        </div>}
        {children}
      </div>
    </div>
  );
}
