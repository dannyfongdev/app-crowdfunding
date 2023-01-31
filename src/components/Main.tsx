import styles from './Main.module.css'

interface MainProps {
  children?: React.ReactNode;
}

export default function Main({ children }: MainProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.title}>About this project</div>
      <p>
        {" "}
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      {children}
    </div>
  );
}
