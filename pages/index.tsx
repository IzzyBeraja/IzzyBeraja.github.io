import Github from "components/github";
import Header from "components/Header";
import Head from "next/head";
import styles from "styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home | IzzyBeraja.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Github />
      </main>
    </div>
  );
};

export default Home;
