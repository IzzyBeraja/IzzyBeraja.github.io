import Header from "components/Header";
import GitHub from "components/GitHub";
import LinkedIn from "components/LinkedIn";
import Projects from "components/Projects";
import Footer from "components/Footer";
import Head from "next/head";

import { GetStaticProps } from "next";
import { GitHubProfile } from "types";
import getProfile from "services/githubProfileReader";

import styles from "styles/Home.module.css";

type Props = {
  gitHubProfile: GitHubProfile;
};

const Home = ({ gitHubProfile }: Props) => {
  return (
    <div>
      <Head>
        <title>Home | IzzyBeraja.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <GitHub profile={gitHubProfile} commitDisplayAmt={1} commits={null} />
        <LinkedIn />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const gitHubProfile = await getProfile("IzzyBeraja");
  console.log(gitHubProfile);
  return {
    props: {
      gitHubProfile,
    },
  };
};

export default Home;
