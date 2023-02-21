import styles from './ThankYou.module.css'

interface ThankYouProps {
  onClose: () => void;
}

export default function ThankYou({onClose}: ThankYouProps) {
  return (
    <div className={styles.container}>
      <img src="./images/icon-check.svg" alt="checkmark icon" />
      <h1>Thanks for your support!</h1>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button className={styles.btn} onClick={onClose}>Got it!</button>
    </div>
  );
}
