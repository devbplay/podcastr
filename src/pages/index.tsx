import Head from 'next/head'
import styles from '../styles/pages/Index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Podcastr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Rocketseat</h1>
    </div>
  )
}
