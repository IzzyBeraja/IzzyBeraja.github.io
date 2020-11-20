import Commit from "components/Commit";

export type GitHubProfile = {
  name: string;
  image: string;
  link: string;
  bio: string;
  commits: Commit[];
  commitLink: string;
};

type Props = {
  commitDisplayAmt: number;
  profile: GitHubProfile;
};

const GitHub = ({ profile, commitDisplayAmt: displayAmt }: Props) => {
  if (!profile) return null;
  const { name, image, link, commits, commitLink, bio } = profile;
  return (
    <div>
      <h2>GitHub</h2>
      <div className="mx-4">
        <p>{`Profile Image: ${image}`}</p>
        <p>{`Profile Name: ${name}`}</p>
        {commits &&
          commits
            .slice(0, displayAmt)
            .map(commit => <Commit key={commit.id} commitData={commit} />)}
      </div>
    </div>
  );
};

export default GitHub;
