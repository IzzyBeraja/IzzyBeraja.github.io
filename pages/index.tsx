import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Izzy Beraja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Although success seems straightforward in hindsight...</h1>
          <h1>Life tends to take the winding path</h1>
        </div>
        <a className={styles.subTitle} href="#">
          Take the winding path?
        </a>

        <p>Scroll Instead</p>
      </main>
    </div>
  );
}
