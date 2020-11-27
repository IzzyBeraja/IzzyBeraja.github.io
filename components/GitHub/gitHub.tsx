import Profile from "components/Profile";
import { GHCommit, GHProfile } from "types";
import GitHubCommitList from "components/CommitList/CommitList";
import styles from "./gitHub.module.scss";

type Props = {
  commitDisplayAmt?: number;
  profile: GHProfile;
  commits: GHCommit[];
};

const GitHub = ({ profile, commitDisplayAmt, commits }: Props) => {
  return (
    <>
      <h2>GitHub</h2>
      <div className={styles.main}>
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
