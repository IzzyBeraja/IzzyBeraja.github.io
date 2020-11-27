import Profile from "components/Profile";
import { GHCommit, GHProfile, cssStyles } from "types";
import GitHubCommitList from "components/CommitList/CommitList";

type Props = {
  commitDisplayAmt?: number;
  profile: GHProfile;
  commits: GHCommit[];
};

const css: cssStyles = {
  main: {
    margin: 0,
    padding: "0 2rem",
    display: "inline-flex",
    justifyContent: "space around",
  },
};

const GitHub = ({ profile, commitDisplayAmt, commits }: Props) => {
  return (
    <>
      <h2>GitHub</h2>
      <div style={css.main}>
        <Profile profileData={profile} />
        <GitHubCommitList
          profileLink={profile.link}
          commits={commits}
          commitDisplayAmt={commitDisplayAmt}
        />
      </div>
    </>
  );
};

export default GitHub;
