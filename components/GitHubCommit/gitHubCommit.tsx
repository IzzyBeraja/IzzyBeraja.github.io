import { GHCommit } from "types";
import styles from "./gitHubCommit.module.scss";

type Prop = {
  commitData: GHCommit;
};

const GitHubCommit = ({
  commitData: { commitLink, message, pushedDate },
}: Prop) => {
  const pushDate = new Date(pushedDate);
  return (
    <div className={styles.bubble}>
      <ul className={styles.commit}>
        <li className={styles.message}>
          <a href={commitLink}>{message}</a>
        </li>
        <li className={styles.pushDate}>
          {`Pushed on ${pushDate.toLocaleDateString()} at ${pushDate.toLocaleTimeString()}`}
        </li>
      </ul>
    </div>
  );
};

export default GitHubCommit;
