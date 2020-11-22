import { GitHubCommit } from "types";

type Prop = {
  commitData: GitHubCommit;
};

const Commit = ({ commitData: { commitLink, message, pushedDate } }: Prop) => {
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
