import styles from '../styles/Loading.module.css'
export default function Loading() {
  return (
    <div className={styles.center}>
      <div className={styles['lds-facebook']}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
