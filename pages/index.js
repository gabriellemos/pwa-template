import styles from '../styles/Home.module.css'

import withPWA from '../components/hoc/withPWA'

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/#welcome-to-next.js">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <a href="/#documentation" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              faucibus arcu in tellus maximus feugiat.
            </p>
          </a>

          <a href="/#learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              faucibus arcu in tellus maximus feugiat.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default withPWA(Home)
