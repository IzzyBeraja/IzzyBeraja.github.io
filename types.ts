import * as CSS from "csstype";

export type GHCommit = {
  id: string;
  message: string;
  pushedDate: string;
  commitLink: string;
};

export type GitHubCommitPayload = {
  sha: string;
  message: string;
};

export type GHProfile = {
  name: string;
  image: string;
  link: string;
  bio: string;
};

export interface cssStyles {
  [key: string]: CSS.Properties;
}

//> There is a way of wording this to have type safety of new properties
export type StyleList<T extends string = string> = Record<T, CSS.Properties>;
