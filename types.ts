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
