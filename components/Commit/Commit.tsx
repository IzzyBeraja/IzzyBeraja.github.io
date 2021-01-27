import { GHCommit } from "types";
import styles from "./Commit.module.scss";

type Prop = {
  commitData: GHCommit;
};

const GitHubCommit = ({
  commitData: { commitLink, message, pushedDate },
}: Prop) => {
  const pushDate = new Date(pushedDate || "1/1/1900");
  return (
    <div
      className={`${styles.bubble} ${styles.borderGradient} ${styles.borderGradientPurple}`}
    >
      <div className={styles.commit}>
        <a className={styles.message} href={commitLink || "www.github.com"}>
          {message.split("\n")[0] || "GitHub commit here"}
        </a>
        <span
          className={styles.pushDate}
        >{`Pushed on ${pushDate.toLocaleDateString()} at ${pushDate.toLocaleTimeString()}`}</span>
      </div>
    </div>
  );
};

export default GitHubCommit;
