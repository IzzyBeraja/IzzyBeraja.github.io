import GitHubCommit from "components/GitHubCommit/gitHubCommit";
import { Commit, GitHubProfile } from "types";

type Props = {
  commitDisplayAmt?: number;
  profile: GitHubProfile;
  commits: Commit[];
};

const GitHub = ({ profile, commitDisplayAmt, commits }: Props) => {
  if (!profile) return null;
  const { name, image, link, bio } = profile;
  return (
    <div>
      <h2>GitHub</h2>
      <div className="mx-4">
        <p>{`Profile Image: ${image}`}</p>
        <p>{`Profile Name: ${name}`}</p>
        {commits &&
          commits
            .slice(0, commitDisplayAmt || commits.length)
            .map(commit => (
              <GitHubCommit key={commit.id} commitData={commit} />
            ))}
      </div>
    </div>
  );
};

export default GitHub;
