import styles from "./Pledge.module.css";

interface PledgeProps {
  // children?: React.ReactNode;
  title: string;
  pledge: string;
  description: string;
  numRemaining: number;
  onSelectReward: (reward: string) => void;
}

export default function Pledge({
  title,
  pledge,
  description,
  numRemaining,
  onSelectReward,
}: PledgeProps): JSX.Element {

  const onClick = () => {
    onSelectReward(title);
  }
  return (
    <div className={numRemaining===0 ? styles.containerDisabled : styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.pledge}>{pledge}</div>
      <p>{description}</p>
      <div className={styles.remainingWrapper}>
        <div className={styles.remaining}>{numRemaining} </div>
        <div className={styles.left}>left</div>
      </div>
      {numRemaining !== 0 && (
        <button className={styles.btn} onClick={onClick}>
          Select Reward
        </button>
      )}
      {numRemaining === 0 && (
        <button className={styles.btnDisabled}>
          Out of Stock
        </button>
      )}
    </div>
  );
}
