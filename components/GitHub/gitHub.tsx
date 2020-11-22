import Commit from "components/GitHub/Commit";
import Profile from "components/GitHub/Profile";
// import styles from "./gitHub.module.scss";
import { GitHubCommit, GitHubProfile } from "types";

type Props = {
  commitDisplayAmt?: number;
  profile: GitHubProfile;
  commits: GitHubCommit[];
};

const GitHub = ({ profile, commitDisplayAmt, commits }: Props) => {
  if (!profile) return null;
  const { name, image, link, bio } = profile;
  return (
    <div>
      <h2>GitHub</h2>
      <div className="row">
        <div className="col">
          <Profile profileData={profile} />
        </div>
        <div className="col">
          {commits &&
            commits
              .slice(0, commitDisplayAmt || commits.length)
              .map(commit => <Commit key={commit.id} commitData={commit} />)}
        </div>
      </div>
    </div>
  );
};

export default GitHub;
