import Header from "components/Header";
import GitHub from "components/GitHub";
import LinkedIn from "components/LinkedIn";
import Projects from "components/Projects";
import Footer from "components/Footer";
import Head from "next/head";

import { GetStaticProps } from "next";
import { Commit, GitHubProfile } from "types";
import getProfile from "services/githubProfileReader";

import styles from "styles/Home.module.css";
import getCommits from "services/githubCommitReader";

type Props = {
  gitHubProfile: GitHubProfile;
  gitHubCommits: Commit[];
};

const Home = ({ gitHubProfile, gitHubCommits }: Props) => {
  console.log("Profile", { gitHubProfile });
  console.log("Commits", { gitHubCommits });
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
  const user = "IzzyBeraja";
  const gitHubProfile = await getProfile(user);
  const gitHubCommits = await getCommits(user, 4);
  return {
    props: {
      gitHubProfile,
      gitHubCommits,
    },
  };
};

export default Home;
