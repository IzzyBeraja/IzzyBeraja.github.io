import Head from "next/head";
import Home from "../components/Title";

import styles from "../styles/Index.module.css";

const Index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Izzy Beraja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
      {/* <Skills /> */}
      {/* <Work /> */}
      {/* <OpenSource /> */}
    </div>
  );
};

export default Index;
