import { GitHubCommit } from "types";

type Prop = {
  commitData: GitHubCommit;
};

const Commit = ({ commitData }: Prop) => {
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

export default Commit;
