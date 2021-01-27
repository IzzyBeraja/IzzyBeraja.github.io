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

type Props = {
  gitHubProfile: GHProfile;
  gitHubCommits: GHCommit[];
};

const Home = ({ gitHubProfile, gitHubCommits }: Props) => {
  return (
    <>
      <Head>
        <title>Home | IzzyBeraja.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {gitHubProfile && gitHubCommits && (
          <GitHub profile={gitHubProfile} commits={gitHubCommits} />
        )}

        <LinkedIn />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const user = "IzzyBeraja";
  const gitHubProfile = await getProfile(user);
  const gitHubCommits = await getCommits(user, 5);
  console.log(gitHubProfile, gitHubCommits);
  return {
    props: {
      gitHubProfile,
      gitHubCommits,
    },
  };
};

export default Home;
