import styles from "./Footer.module.css";

export default function Footer({ taskDone, totalTask }) {
  return (
    <div className={styles.footerDiv}>
      <span className={styles.footer}>Task Done : {taskDone}</span>
      <span className={styles.footer}>Total Task : {totalTask}</span>
    </div>
  );
}
