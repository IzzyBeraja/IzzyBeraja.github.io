import Head from "next/head";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Work from "../components/Work";
import OpenSource from "../components/OpenSource";

import styles from "../styles/Index.module.css";

const Index = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Izzy Beraja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
      <Skills />
      <Work />
      <OpenSource />
    </main>
  );
};

export default Index;
