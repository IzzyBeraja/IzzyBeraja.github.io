import Header from "components/Header";
import GitHub from "components/GitHub";
import LinkedIn from "components/LinkedIn";
import Projects from "components/Projects";
import Footer from "components/Footer";
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
        <GitHub />
        <LinkedIn />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
