import styles from "./PledgeRadio.module.css";

interface PledgeRadioProps {
  // children?: React.ReactNode;
  title: string;
  pledge: string;
  description: string;
  numRemaining: number;
}

export default function PledgeRadio({
  title,
  pledge,
  description,
  numRemaining
}: PledgeRadioProps): JSX.Element {
  return (
    <div
      className={
        numRemaining === 0 ? styles.containerDisabled : styles.container
      }
    >
      <div className={styles.radioWrapper}>
        <label>
        <input type="radio" name="pledgeLevel" disabled={numRemaining == 0}></input>
        <div>
          <div className={styles.title}>{title}</div>
          {numRemaining > -1 && <div className={styles.pledge}>{pledge}</div>}
        </div></label>
      </div>

      <p>{description}</p>
      {numRemaining > -1 && (
        <div className={styles.remainingWrapper}>
          <div className={styles.remaining}>{numRemaining} </div>
          <div className={styles.left}>left</div>
        </div>
      )}
    </div>
  );
}
