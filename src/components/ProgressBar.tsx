import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  soFar: number,
  total: number,
}

export default function ProgressBar ({soFar, total}: ProgressBarProps) {
  const val = String(soFar/total*100) + "%";
  
  const progress = {width: val};
  return(
    <div className={styles.outerContainer}>
      <div className={styles.innerBar} style={progress}></div>
    </div>
  )
}