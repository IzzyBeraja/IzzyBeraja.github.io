import Commit from "components/Commit";
import { GHCommit } from "types";
import styles from "./CommitList.module.scss";

type Props = {
  profileLink: string;
  commits: GHCommit[];
  commitDisplayAmt: number;
};

const GitHubCommitList = ({
  profileLink,
  commits,
  commitDisplayAmt,
}: Props) => {
  return (
    <div className={styles.commitList}>
      {commits?.slice(0, commitDisplayAmt || commits.length).map(commit => {
        return commit && <Commit key={commit.id} commitData={commit} />;
      })}
      <div className="text-center">
        <a href={profileLink}>See more of my GitHub here</a>
      </div>
    </div>
  );
};

export default GitHubCommitList;
