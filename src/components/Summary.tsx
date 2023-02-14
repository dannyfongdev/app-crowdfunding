import styles from "./Summary.module.css";

interface SummaryProps {
  totalPledgeAmount: number;
  totalBackers: number;
}

// @todo progress bar

export default function Summary({
  totalPledgeAmount,
  totalBackers,
}: SummaryProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.big}>
          ${totalPledgeAmount.toLocaleString("en-us")}
        </div>

        <div className={styles.small}>of $100,000 backed</div>
      </div>
      <div className={styles.line}></div>
      <div>
        <div className={styles.big}>{totalBackers.toLocaleString("en-us")}</div>
        <div className={styles.small}>total backers</div>
      </div>
      <div className={styles.line}></div>
      <div>
        <div className={styles.big}>56</div>{" "}
        <div className={styles.small}>days left</div>
      </div>
    </div>
  );
}
