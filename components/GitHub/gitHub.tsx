import Profile from "components/Profile";
import GitHubCommit from "components/GitHubCommit/gitHubCommit";
import styles from "./gitHub.module.scss";
import { GHCommit, GHProfile } from "types";

type Props = {
  commitDisplayAmt?: number;
  profile: GHProfile;
  commits: GHCommit[];
};

const GitHub = ({ profile, commitDisplayAmt, commits }: Props) => {
  if (!profile) return null;
  return (
    <div>
      <h2>GitHub</h2>
      <div className="row">
        <div className="col">
          <Profile profileData={profile} />
        </div>
        <div className={`col ${styles.commitList}`}>
          {commits &&
            commits
              .slice(0, commitDisplayAmt || commits.length)
              .map(commit => (
                <GitHubCommit key={commit.id} commitData={commit} />
              ))}
          <div className={styles.seeMore}>
            <a href={profile.link}>See more of my GitHub here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
