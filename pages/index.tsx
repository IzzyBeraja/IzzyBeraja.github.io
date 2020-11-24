import Header from "components/Header";
import GitHub from "components/GitHub";
import LinkedIn from "components/LinkedIn";
import Projects from "components/Projects";
import Footer from "components/Footer";
import Head from "next/head";

import { GetStaticProps } from "next";
import { GHCommit, GHProfile } from "types";
import getProfile from "services/githubProfileReader";

import getCommits from "services/githubCommitReader";

const totalCommits = 1;

type Props = {
  gitHubProfile: GHProfile;
  gitHubCommits: GHCommit[];
};

const Home = ({ gitHubProfile, gitHubCommits }: Props) => {
  return (
    <div>
      <Head>
        <title>Home | IzzyBeraja.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <GitHub
          profile={gitHubProfile}
          commits={gitHubCommits}
          commitDisplayAmt={totalCommits + 3}
        />
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
  const gitHubCommits = await getCommits(user, totalCommits);
  return {
    props: {
      gitHubProfile,
      gitHubCommits,
    },
  };
};

export default Home;
