import Profile from "components/Profile";
import GitHubCommit from "components/GitHubCommit/gitHubCommit";
import styles from "./gitHub.module.scss";
import { GHCommit, GHProfile } from "types";
import { makeStyles } from "@material-ui/core";
import GitHubCommitList from "components/GitHubCommitList/gitHubCommitList";

type Props = {
  commitDisplayAmt?: number;
  profile: GHProfile;
  commits: GHCommit[];
};

const useStyles = makeStyles({
  main: {
    margin: 0,
    padding: "0 2rem",
    display: "inline-flex",
    justifyContent: "space around",
  },
});

const GitHub = ({ profile, commitDisplayAmt, commits }: Props) => {
  const classes = useStyles();
  return (
    <>
      <h2>GitHub</h2>
      <div className={classes.main}>
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
