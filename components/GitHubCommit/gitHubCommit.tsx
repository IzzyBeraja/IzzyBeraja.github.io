import { Box, makeStyles } from "@material-ui/core";
import { GHCommit, StyleArray } from "types";
import styles from "./gitHubCommit.module.scss";
import * as CSS from "csstype";

type Prop = {
  commitData: GHCommit;
};

//> There is a way to ensure type safety for each property (commit, other, etc.)
//> Haven't been able to figure out but it has something to do with Record<string, CSS.Property>
const css: StyleArray = {
  commit: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: "0px",
    borderRadius: "10px",
    boxShadow: "0 3px 5px 4px rgba(255, 105, 135, .3)",
  },
  other: {},
};

const GitHubCommit = ({
  commitData: { commitLink, message, pushedDate },
}: Prop) => {
  const pushDate = new Date(pushedDate || "1/1/1900");
  return (
    <Box>
      <ul style={css.commit}>
        <li className={styles.message}>
          <a href={commitLink || "www.github.com"}>
            {message || "GitHub commit here"}
          </a>
        </li>
        <li className={styles.pushDate}>
          {`Pushed on ${pushDate.toLocaleDateString()} at ${pushDate.toLocaleTimeString()}`}
        </li>
      </ul>
    </Box>
  );
};

export default GitHubCommit;
