import { makeStyles } from "@material-ui/core";
import GitHubCommit from "components/GitHubCommit";
import { GHCommit } from "types";

type Props = {
  profileLink: string;
  commits: GHCommit[];
  commitDisplayAmt: number;
};

const useStyles = makeStyles({
  commitList: {
    display: "block",
  },
});

const GitHubCommitList = ({
  profileLink,
  commits,
  commitDisplayAmt,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.commitList}>
      {commits &&
        commits
          .slice(0, commitDisplayAmt || commits.length)
          .map(commit => <GitHubCommit key={commit.id} commitData={commit} />)}
      <div>
        <a href={profileLink}>See more of my GitHub here</a>
      </div>
    </div>
  );
};

export default GitHubCommitList;
