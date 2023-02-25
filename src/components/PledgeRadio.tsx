import { useState, useRef, useEffect } from "react";

import styles from "./PledgeRadio.module.css";

interface PledgeRadioProps {
  // children?: React.ReactNode;
  title: string;
  pledge: string;
  description: string;
  numRemaining: number;
  selected: boolean;
  onSelect: (s: string) => void;
  onPledge: (n: number) => void;
  minPledge: number;
}

export default function PledgeRadio({
  title,
  pledge,
  description,
  numRemaining,
  selected,
  onSelect,
  onPledge,
  minPledge,
}: PledgeRadioProps): JSX.Element {
  const [pledgeAmount, setPledgeAmount] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  function focusInput() {
    if (ref.current != null) {
      ref.current.focus();
    } else {
      console.log("ref is null");
    }
  }

  function handleChange() {
    onSelect(title);
  }

  function handlePledge() {
    if (pledgeAmount > 0 && pledgeAmount >= minPledge) {
      onPledge(pledgeAmount);
    }
  }

  function outerDivClass() {
    if (numRemaining === 0) {
      return styles.containerDisabled;
    } else if (selected) {
      return styles.containerSelected;
    } else {
      return styles.container;
    }
  }

  function makePledgeClass() {
    if (selected) {
      return styles.showMakePledge;
    } else {
      return styles.hideMakePledge;
    }
  }

  // setFocus to input, set default pledge value when selected pledge level changes
  useEffect(() => {
    setPledgeAmount(minPledge);
    focusInput();
  }, [selected, minPledge]);

  return (
    <div className={outerDivClass()}>
      <div className={styles.radioWrapper}>
        <label>
          <input
            type="radio"
            name="pledgeLevel"
            disabled={numRemaining === 0}
            onChange={handleChange}
            checked={selected}
          ></input>
          <div>
            <div className={styles.title}>{title}</div>
            {numRemaining > -1 && <div className={styles.pledge}>{pledge}</div>}
          </div>
        </label>
      </div>

      <p>{description}</p>
      {numRemaining > -1 && (
        <div className={styles.remainingWrapper}>
          <div className={styles.remaining}>{numRemaining} </div>
          <div className={styles.left}>left</div>
        </div>
      )}

      <div className={makePledgeClass()}>
        <div className={styles.makePledgeLine}></div>
        <div className={styles.pledgeWrapper}>
        <p>Enter your pledge</p>
        <div>
        <div className={styles.amountWrapper}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="amount"
              value={pledgeAmount ? pledgeAmount : ""}
              // ternary operator otherwise will show "NaN"
              onChange={(e) => {
                setPledgeAmount(parseFloat(e.target.value));
              }}
              // use ref to "autofocus"
              ref={ref}
            />
            <span className={styles.dollarIcon}>$</span>
          </div>
          <button className={styles.btn} onClick={handlePledge}>
            Continue
          </button>
        </div>
        <div
          className={
            isNaN(pledgeAmount) ? styles.errorMsg : styles.hideErrorMsg
          }
        >
          Please enter a valid number.
        </div>
        <div
          className={
            pledgeAmount > 0 && pledgeAmount < minPledge
              ? styles.errorMsg
              : styles.hideErrorMsg
          }
        >
          Your pledge is below the minimum for this reward.
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
