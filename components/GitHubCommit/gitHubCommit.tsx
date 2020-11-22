import { Commit } from "types";

type Prop = {
  commitData: Commit;
};

const GitHubCommit = ({ commitData }: Prop) => {
  const { commitLink, message, pushedDate } = commitData;
  return (
    <ul>
      <li>
        <a href={commitLink}>{message}</a>
      </li>
      <li>{pushedDate}</li>
    </ul>
  );
};

export default GitHubCommit;
