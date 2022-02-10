import styles from '../styles/home.module.scss'

function HomePage() {
    return (
      <div className={styles.containerBg}>
        <h1>Web3 Project</h1>

        <div className={styles.btnContainer}>
          <button>Connect</button>
        </div>
      </div>
    )
  }
  
  export default HomePage