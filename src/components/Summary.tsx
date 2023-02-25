import styles from "./Summary.module.css";
import ProgressBar from "./ProgressBar";

interface SummaryProps {
  totalPledgeAmount: number;
  totalBackers: number;
}

export default function Summary({
  totalPledgeAmount,
  totalBackers,
}: SummaryProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.big}>
            ${totalPledgeAmount.toLocaleString("en-us")}
          </div>

          <div className={styles.small}>of $100,000 backed</div>
        </div>
        <div className={styles.line}></div>
        <div>
          <div className={styles.big}>
            {totalBackers.toLocaleString("en-us")}
          </div>
          <div className={styles.small}>total backers</div>
        </div>
        <div className={styles.line}></div>
        <div>
          <div className={styles.big}>56</div>{" "}
          <div className={styles.small}>days left</div>
        </div>
        <ProgressBar soFar={totalPledgeAmount} total={100000} />
      </div>
    </>
  );
}
